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

  profile: any;
  constructor() {
    this.user.getUserService(this.user.getUser().id).then((response) => {
      this.profile = response;
      this.user.setUser({
        ...this.user.getUser(),
        role: response.roles[0],
        idRole: response.owner ? response.owner.id : response.tenant.id,
      });
      localStorage.setItem('userGreen', JSON.stringify(this.user.getUser()));
    });
  }
  ngOnInit(): void {}
}
