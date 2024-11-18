import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class TenantService extends BaseService<any> {
  constructor() {
    super();
    this.resourceEndPoint = '/tenants';
  }
}