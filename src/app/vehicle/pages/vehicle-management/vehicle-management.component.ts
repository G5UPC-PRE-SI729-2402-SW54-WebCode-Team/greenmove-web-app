import { Component, inject, OnInit } from '@angular/core';
import { VehicleItemComponent } from '../../components/vehicle-item/vehicle-item.component';
import { VehicleListComponent } from '../../components/vehicle-list/vehicle-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleEntity } from '../../models/vehicle.entity';

@Component({
  selector: 'app-vehicle-management',
  standalone: true,
  imports: [VehicleItemComponent, VehicleListComponent, TranslateModule],
  templateUrl: './vehicle-management.component.html',
  styleUrl: './vehicle-management.component.scss',
})
export class VehicleManagementComponent implements OnInit {
  vehicleList: VehicleEntity[];
  private vehicleService: VehicleService = inject(VehicleService);

  ngOnInit(): void {
    this.vehicleService
      .getAll()
      .subscribe((response) => (this.vehicleList = response));
  }
}
