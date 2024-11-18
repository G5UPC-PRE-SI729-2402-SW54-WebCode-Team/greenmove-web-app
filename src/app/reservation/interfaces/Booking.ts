import { IVehicle } from '../../vehicle/interfaces/IVehicle';

export interface IBooking {
  id: string;
  userId: string;
  code: string;
  suscriptionActive: boolean;
  vehicle: IVehicle;
}
