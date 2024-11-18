import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base-service.service';
import { VehicleEntity } from '../models/vehicle.entity';
import { catchError, lastValueFrom, retry, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehicleService extends BaseService<VehicleEntity> {
  constructor() {
    super();
    this.resourceEndPoint = '/vehicles';
  }

  public getVehiclesAvailable(status: string): Promise<Array<any>> {
    return lastValueFrom(
      this.http
        .get<Array<any>>(`${this.resourcePath()}/status/${status}`, this.httpOptions)
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(() => new Error('Error fetching vehicle status.'));
          })
        )
    );
  }
}
