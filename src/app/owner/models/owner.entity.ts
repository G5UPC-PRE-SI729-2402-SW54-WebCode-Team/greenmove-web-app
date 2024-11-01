export class OwnerEntity {
  id: string;
  name: string;
  vehicles: any[];
  constructor() {
    this.id = '';
    this.name = '';
    this.vehicles = [];
  }
}
