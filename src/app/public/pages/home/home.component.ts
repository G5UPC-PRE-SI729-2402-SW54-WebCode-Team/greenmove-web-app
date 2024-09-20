import { Component } from '@angular/core';
import { VehicleManagementComponent } from '../../../vehicle/pages/vehicle-management/vehicle-management.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VehicleManagementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
