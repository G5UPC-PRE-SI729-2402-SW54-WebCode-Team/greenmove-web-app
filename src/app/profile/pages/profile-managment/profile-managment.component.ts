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
import { TenantService } from '../../services/tenant.service';
import { ReservationService } from '../../../reservation/services/reservation.service';

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
  selector: 'app-profile-managment',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NavBarComponent,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './profile-managment.component.html',
  styleUrl: './profile-managment.component.scss',
})
export class ProfileManagmentComponent implements OnInit {
  authService = inject(AuthService);
  tenantService = inject(TenantService);
  reservationService = inject(ReservationService);
  tableBasicExample = new TableBasicExample();
  displayedColumns = this.tableBasicExample.displayedColumns;
  titlePage: string = 'Perfil del usuario';
  tenantEntrity: any;
  reservationsEntrity: any;
  constructor(private router: Router, private location: Location) {}
  ngOnInit(): void {
    const idRole = JSON.parse(
      localStorage.getItem('userGreen') || 'null'
    ).idRole;
    this.tenantService
      .getById(idRole)
      .subscribe((response) => (this.tenantEntrity = response));

    this.reservationService
      .getReservationsByTenent(idRole)
      .then((response: any) => {
        this.reservationsEntrity = response;
      });
  }

  goToBookingActive(): void {
    this.router.navigate(['/reserve-active']);
  }

  goToBack(): void {
    this.location.back();
  }
  convertWord(p: string): string {
    const word: { [key: string]: string } = {
      DEFAULT: 'BÁSICO',
      BASIC: 'BÁSICO',
      INTERMEDIATE: 'INTERMEDIO',
      ADVANCED: 'AVANZADO',
    };

    return word[p] || '';
  }
}
