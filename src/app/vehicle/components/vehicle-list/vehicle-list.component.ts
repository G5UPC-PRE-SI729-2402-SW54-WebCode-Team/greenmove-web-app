import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IVehicle } from '../../interfaces/IVehicle';
import { VehicleItemComponent } from '../vehicle-item/vehicle-item.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleItemComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss',
})
export class VehicleListComponent {
  @Input() vehicles: any;
  @Output() vehicleSelected = new EventEmitter<any>();

  onVehicleClicked(vehicle: any) {
    this.vehicleSelected.emit(vehicle);
  }
}
