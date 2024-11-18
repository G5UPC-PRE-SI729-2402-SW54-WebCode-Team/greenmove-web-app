export class OwnerEntity {
  id: string;
  name: string;
  vehicles: any[];
  constructor() {
    this.id = '';
    this.name = '';
    this.vehicles = [];
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getVehicles() {
    return this.vehicles;
  }

  set setId(id: string) {
    this.id = id;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setVehicles(vehicles: any) {
    this.vehicles = vehicles;
  }
}
