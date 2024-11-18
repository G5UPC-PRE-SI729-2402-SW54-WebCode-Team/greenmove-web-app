import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base-service.service';
import { OwnerEntity } from '../models/owner.entity';
import { catchError, lastValueFrom, retry, throwError } from 'rxjs';
import { VehicleEntity } from '../../vehicle/models/vehicle.entity';

@Injectable({
  providedIn: 'root',
})
export class OwnerService extends BaseService<OwnerEntity> {
  constructor() {
    super();
    this.resourceEndPoint = '/owners';
  }

  public getVehiclesByOwner(ownerId: number): Promise<VehicleEntity[]> {
    return lastValueFrom(
      this.http
        .get<Array<VehicleEntity>>(
          `${this.resourcePath()}/${ownerId}/vehicles`,
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(
              () => new Error('Error fetching vehicles by owner.')
            );
          })
        )
    );
  }
  public deleteVehicleByOwner(vehicleId: number): Promise<Array<any>> {
    return lastValueFrom(
      this.http
        .post<Array<any>>(
          `${this.resourcePath()}/vehicles/${vehicleId}`,
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(
              () => new Error('Error fetching vehicles by owner.')
            );
          })
        )
    );
  }
  public addVehiclesByOwner(ownerId: number, item: any): Promise<Array<any>> {
    return lastValueFrom(
      this.http
        .post<Array<any>>(
          `${this.resourcePath()}/${ownerId}/vehicles`,
          JSON.stringify(item),
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(
              () => new Error('Error fetching vehicles by owner.')
            );
          })
        )
    );
  }
}
