import { Component, Input } from '@angular/core';
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
}
