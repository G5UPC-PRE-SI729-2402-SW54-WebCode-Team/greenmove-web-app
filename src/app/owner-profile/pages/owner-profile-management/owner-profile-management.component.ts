import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { MatTableModule } from '@angular/material/table';
import { IRental } from '../../../rental/interfaces/Rental';
import { CommonModule, Location } from '@angular/common';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VehicleDialogComponent } from '../../components/vehicle-dialog/vehicle-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { OwnerService } from '../../../owner/services/owner.service';
export interface IHistoryRental {
  id: string;
  dateStart: string;
  dateEnd: string;
  hours: number;
}

const ELEMENT_DATA: IHistoryRental[] = [
  { id: '1', dateStart: '24/09/24', dateEnd: '25/09/24', hours: 9 },
  { id: '1', dateStart: '24/09/24', dateEnd: '25/09/24', hours: 9 },
  { id: '1', dateStart: '24/09/24', dateEnd: '25/09/24', hours: 9 },
  { id: '1', dateStart: '24/09/24', dateEnd: '25/09/24', hours: 9 },
  { id: '1', dateStart: '24/09/24', dateEnd: '25/09/24', hours: 9 },
];

export class TableBasicExample {
  displayedColumns: string[] = ['dateStart', 'dateEnd', 'hours'];
  dataSource = ELEMENT_DATA;
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
  tableBasicExample = new TableBasicExample();
  displayedColumns = this.tableBasicExample.displayedColumns;
  titlePage: string = 'Perfil del usuario';
  vehicles = [10, 10, 10, 20, 20, 20, 30, 40];
  ownerEntrity: any = [];
  readonly dialog = inject(MatDialog);

  constructor(private router: Router, private location: Location) {
    this.ownerService
      .getById(1)
      .subscribe((response: any) => (this.ownerEntrity = response[0]));
  }
  ngOnInit(): void {}

  goToBookingActive(): void {
    this.router.navigate(['/reserve-active']);
  }

  goToBack(): void {
    this.location.back();
  }

  addVehicle(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(VehicleDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
