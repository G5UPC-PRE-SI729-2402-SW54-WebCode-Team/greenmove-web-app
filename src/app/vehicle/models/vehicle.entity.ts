import { ITypeVehicle } from '../interfaces/ITypeVehicle';
import { IVehicle } from '../interfaces/IVehicle';

export class VehicleEntity implements IVehicle {
  id: string;
  name: string;
  type: ITypeVehicle;
  urlImg: string;
  constructor(vehicle: {
    id: string;
    name: string;
    type: ITypeVehicle;
    urlImg: string;
  }) {
    this.id = vehicle.id;
    this.name = vehicle.name;
    this.type = vehicle.type;
    this.urlImg = vehicle.urlImg;
  }
}
