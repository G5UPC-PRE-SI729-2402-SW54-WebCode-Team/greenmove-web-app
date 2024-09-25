import { Component, inject, OnInit } from '@angular/core';
import { SuscriptionListComponent } from '../../components/suscription-list/suscription-list.component';
import { AuthService } from '../../../auth/services/auth.service';
import { ISuscription } from '../../interfaces/ISuscription';
import { NavBarComponent } from '../../../public/components/nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-suscription-management',
  standalone: true,
  imports: [SuscriptionListComponent, NavBarComponent, TranslateModule],
  templateUrl: './suscription-management.component.html',
  styleUrl: './suscription-management.component.scss',
})
export class SuscriptionManagementComponent implements OnInit {
  userService = inject(AuthService);
  titlePage: string = 'Suscripciones';
  constructor() {}
  ngOnInit(): void {}
}
