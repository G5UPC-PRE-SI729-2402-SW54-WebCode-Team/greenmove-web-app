import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base-service.service';
import { catchError, lastValueFrom, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService extends BaseService<any> {
  constructor() {
    super();
    this.resourceEndPoint = '/reservations';
  }

  public getReservationsByOwner(ownerId: any): Promise<Array<any>> {
    return lastValueFrom(
      this.http
        .get<Array<any>>(
          `${this.resourcePath()}/owner/${ownerId}`,
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(
              () => new Error('Error fetching vehicle status.')
            );
          })
        )
    );
  }

  public getReservationsByTenent(tenantId: any): Promise<Array<any>> {
    return lastValueFrom(
      this.http
        .get<Array<any>>(
          `${this.resourcePath()}/tenant/${tenantId}`,
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(
              () => new Error('Error fetching vehicle status.')
            );
          })
        )
    );
  }

  public updateReservation(reservationId: any, status: any): Promise<any> {
    return lastValueFrom(
      this.http
        .put<Array<any>>(
          `${this.resourcePath()}/${reservationId}/status/${status}`,
          '',
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
