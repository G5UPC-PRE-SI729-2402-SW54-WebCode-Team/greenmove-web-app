import { Component, inject, OnInit } from '@angular/core';
import { VehicleManagementComponent } from '../../../vehicle/pages/vehicle-management/vehicle-management.component';
import { AuthService } from '../../../auth/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VehicleManagementComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user = inject(AuthService);

  constructor() {}
  ngOnInit(): void {}
}
