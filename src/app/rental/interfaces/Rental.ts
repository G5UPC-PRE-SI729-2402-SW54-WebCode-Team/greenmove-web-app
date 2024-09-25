import { IBooking } from './Booking';

export interface IRental {
  id: string;
  bookingId: string;
  bookingCode: string;
  hours: number;
  dateStart: string;
  dateEnd: string;
  booking: Omit<IBooking, 'suscriptionActive'>;
}
