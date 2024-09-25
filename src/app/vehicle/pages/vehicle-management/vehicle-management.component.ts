import { Component } from '@angular/core';
import { VehicleItemComponent } from '../../components/vehicle-item/vehicle-item.component';
import { VehicleListComponent } from '../../components/vehicle-list/vehicle-list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-management',
  standalone: true,
  imports: [VehicleItemComponent, VehicleListComponent, TranslateModule],
  templateUrl: './vehicle-management.component.html',
  styleUrl: './vehicle-management.component.scss',
})
export class VehicleManagementComponent {}
