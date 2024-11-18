import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { MatTableModule } from '@angular/material/table';
import { IRental } from '../../../reservation/interfaces/Rental';
import { Location } from '@angular/common';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { TenantService } from '../../services/tenant.service';

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
  ],
  templateUrl: './profile-managment.component.html',
  styleUrl: './profile-managment.component.scss',
})
export class ProfileManagmentComponent implements OnInit {
  authService = inject(AuthService);
  tenantService = inject(TenantService);
  tableBasicExample = new TableBasicExample();
  displayedColumns = this.tableBasicExample.displayedColumns;
  titlePage: string = 'Perfil del usuario';
  tenantEntrity: any;
  constructor(private router: Router, private location: Location) {}
  ngOnInit(): void {
    this.tenantService
      .getById(1)
      .subscribe((response) => (this.tenantEntrity = response));
  }

  goToBookingActive(): void {
    this.router.navigate(['/reserve-active']);
  }

  goToBack(): void {
    this.location.back();
  }
}
