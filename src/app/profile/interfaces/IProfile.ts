import { IRental } from '../../reservation/interfaces/Rental';
import { ISuscription } from '../../suscription/interfaces/ISuscription';

export interface IProfile {
  id: string;
  fullName: string;
  suscription: null | ISuscription;
  ubication: string;
  calification: number;
  bookingActive: boolean;
  historyRental: IRental[];
}
