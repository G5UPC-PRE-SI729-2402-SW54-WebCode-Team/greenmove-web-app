import { Injectable } from '@angular/core';
import { BaseService } from '../../public/shared/services/base-service.service';
import { OwnerEntity } from '../models/owner.entity';

@Injectable({
  providedIn: 'root',
})
export class OwnerService extends BaseService<OwnerEntity> {
  constructor() {
    super();
    this.resourceEndPoint = '/owners';
  }
}
