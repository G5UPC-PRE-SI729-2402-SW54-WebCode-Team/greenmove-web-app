import { Injectable } from '@angular/core';
import { BaseService } from '../../public/shared/services/base-service.service';
import { VehicleEntity } from '../models/vehicle.entity';

@Injectable({
  providedIn: 'root',
})
export class VehicleService extends BaseService<VehicleEntity> {
  constructor() {
    super();
    this.resourceEndPoint = '/vehicles';
  }


}
