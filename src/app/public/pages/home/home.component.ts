import { Component, inject, OnInit } from '@angular/core';
import { VehicleManagementComponent } from '../../../vehicle/pages/vehicle-management/vehicle-management.component';
import { AuthService } from '../../../auth/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { OwnerManagementComponent } from '../../../owner/pages/owner-management/owner-management.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    VehicleManagementComponent,
    TranslateModule,
    CommonModule,
    OwnerManagementComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user = inject(AuthService);

  constructor() {
    this.user.getUser();
    console.log('console', this.user.getUser());
  }
  ngOnInit(): void {}
}
