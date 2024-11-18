export class RentalEntity {
  id: string;
  startDate: string;
  endDate: string;
  ownerId: string;
  vehicleId: string;
  userId: string;

  constructor() {
    this.endDate = '';
    this.startDate = '';
    this.id = '';
    this.ownerId = '';
    this.vehicleId = '';
    this.userId = '';
  }
}
