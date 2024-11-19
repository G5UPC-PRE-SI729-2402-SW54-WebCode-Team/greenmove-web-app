import { ITypeVehicle } from '../interfaces/ITypeVehicle';
import { IVehicle } from '../interfaces/IVehicle';
import { VehicleStatus } from './vehicle-status.enum';
import { VehicleType } from './vehicle-type.enum';

export class VehicleEntity implements IVehicle {
  id: string;
  name: string;
  type: VehicleType;
  urlImg: string;
  status: VehicleStatus;
  constructor(vehicle: {
    id: string;
    name: string;
    type: VehicleType;
    urlImg: string;
    status: VehicleStatus;
  }) {
    this.id = vehicle.id;
    this.name = vehicle.name;
    this.type = vehicle.type;
    this.urlImg = vehicle.urlImg;
    this.status = vehicle.status
  }
}
