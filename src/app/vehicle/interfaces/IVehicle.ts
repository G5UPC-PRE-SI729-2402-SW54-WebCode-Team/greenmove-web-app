import { VehicleStatus } from '../models/vehicle-status.enum';
import { VehicleType } from '../models/vehicle-type.enum';
import { ITypeVehicle } from './ITypeVehicle';

export interface IVehicle {
  id: string;
  name: string;
  type: VehicleType;
  urlImg: string;
  status: VehicleStatus;
}
