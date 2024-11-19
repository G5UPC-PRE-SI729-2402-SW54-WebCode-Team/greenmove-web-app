import { Component, inject, OnInit } from '@angular/core';
import { VehicleItemComponent } from '../../components/vehicle-item/vehicle-item.component';
import { VehicleListComponent } from '../../components/vehicle-list/vehicle-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleEntity } from '../../models/vehicle.entity';
import { VehicleStatus } from '../../models/vehicle-status.enum';
import { ReservationService } from '../../../reservation/services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-management',
  standalone: true,
  imports: [VehicleItemComponent, VehicleListComponent, TranslateModule],
  templateUrl: './vehicle-management.component.html',
  styleUrl: './vehicle-management.component.scss',
})
export class VehicleManagementComponent implements OnInit {
  vehicleListAvailable: VehicleEntity[];
  private vehicleService: VehicleService = inject(VehicleService);
  private reservationService: any = inject(ReservationService);

  entrityReservation: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.vehicleService
      .getVehiclesAvailable(VehicleStatus.AVAILABLE)
      .then((value) => (this.vehicleListAvailable = value))
      .catch((error) => console.error('Error:', error));
  }

  reserveVehicle(): void {
    this.reservationService
      .create({})
      .then((response: any) => console.log(response));
  }

  onVehicleSelected(vehicle: any) {
    const idRole = JSON.parse(
      localStorage.getItem('userGreen') || 'null'
    ).idRole;
    this.reservationService
      .create({
        vehicleId: vehicle.id,
        ownerId: vehicle.owner.id,
        tenantId: idRole,
      })
      .subscribe((response: any) => {
        console.log(response);
        this.entrityReservation = response;
        this.router.navigate([`/reservation/successful/`, response.id]);
      });
  }
}
