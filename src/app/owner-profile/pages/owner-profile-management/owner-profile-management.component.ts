import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { MatTableModule } from '@angular/material/table';
import { IRental } from '../../../reservation/interfaces/Rental';
import { CommonModule, Location } from '@angular/common';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VehicleDialogComponent } from '../../components/vehicle-dialog/vehicle-dialog.component';
import { ChangeDetectorRef } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { OwnerService } from '../../../owner/services/owner.service';
import { VehicleService } from '../../../vehicle/services/vehicle.service';
import { VehicleStatus } from '../../../vehicle/models/vehicle-status.enum';
import { VehicleEntity } from '../../../vehicle/models/vehicle.entity';
import { VehicleType } from '../../../vehicle/models/vehicle-type.enum';
export interface IHistoryRental {
  id: string;
  dateStart: string;
  dateEnd: string;
  hours: number;
}

@Component({
  selector: 'app-owner-profile-management',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NavBarComponent,
    TranslateModule,
    MatCardModule,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './owner-profile-management.component.html',
  styleUrl: './owner-profile-management.component.scss',
})
export class OwnerProfileManagementComponent implements OnInit {
  authService = inject(AuthService);
  ownerService = inject(OwnerService);
  vehicleSerivce = inject(VehicleService);
  titlePage: string = 'Perfil del usuario';
  vehicles: any;
  ownerEntrity: any = [];
  vehicleNew: any;
  readonly dialog = inject(MatDialog);

  constructor(private router: Router, private location: Location) {
    this.ownerService.getById(2).subscribe((response: any) => {
      this.ownerEntrity = response;
    });
    this.ownerService.getVehiclesByOwner(2).then((response: any[]) => {
      console.log('vehicles', response);
      this.vehicles = response;
    });
  }
  ngOnInit(): void {}

  goToBookingActive(): void {
    this.router.navigate(['/reserve-active']);
  }

  goToBack(): void {
    this.location.back();
  }

  selectImage(p: string): string {
    const images: { [key: string]: string } = {
      ELECTRIC_BIKE:
        'https://speed.pedegoelectricbikes.com/wp-content/uploads/2024/03/MOTO_BLU_3-4_layers-min.jpg',
      ELECTRIC_SCOOTER:
        'https://www.hiboy.com/cdn/shop/products/b58ce7b99582c961375527c3c6b27ebb_2048x2048.png?v=1725261690',
      ELECTRIC_CAR:
        'https://www.cnet.com/a/img/resize/ce957fcc2b9b41c24e068763b5da1eb20ecd04dd/hub/2023/06/07/a6cb0266-09c3-4543-9f7d-e23c14b996d2/volvo-ex30-2025-debut-vendor-7.jpg?auto=webp&width=1200',
    };

    return (
      images[p] ||
      'https://speed.pedegoelectricbikes.com/wp-content/uploads/2024/03/MOTO_BLU_3-4_layers-min.jpg'
    );
  }
  openDialog() {
    const dialogRef = this.dialog.open(VehicleDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.vehicleNew = result;
      console.log(result);
      const vehicleRequest = {
        ...this.vehicleNew,
        status: VehicleStatus.AVAILABLE,
        urlImage: this.selectImage(this.vehicleNew.type),
        latitude: '-12.091745240454415',
        longitude: '-77.04282929817016',
      };
      if (result) {
        this.ownerService
          .addVehiclesByOwner(this.ownerEntrity.id, vehicleRequest)
          .then(() => (this.vehicles = [...this.vehicles, vehicleRequest]));
      }
    });
  }

  deleteVehicle(vehicle: any) {
    const index = this.vehicles.findIndex(
      (value: any) => value.id === vehicle.id
    );

    const deleteVehicles = [
      ...this.vehicles.slice(0, index),
      ...this.vehicles.slice(index + 1),
    ];

    this.vehicles = deleteVehicles;
  }

  addVehicle(): void {}

  convertWord(p: string): string {
    const word: { [key: string]: string } = {
      ELECTRIC_BIKE: 'BICICLETA ELECTRICA',
      ELECTRIC_SCOOTER: 'SCOOTER ELECTRICO',
      ELECTRIC_CAR: 'CARRO ELECTRICO',
    };

    return word[p] || '';
  }
}
