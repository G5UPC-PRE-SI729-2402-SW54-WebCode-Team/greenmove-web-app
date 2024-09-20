import { ITypeVehicle } from './ITypeVehicle';

export interface IVehicle {
  id: string;
  name: string;
  type: ITypeVehicle;
  urlImg: string;
}
