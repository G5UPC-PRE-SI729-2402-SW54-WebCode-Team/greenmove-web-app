import { Component, OnInit, HostListener, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    CommonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentLang: string = 'en';
  languages: string[] = ['en', 'es'];
  windowWidth: number;
  maxMobile = 768;
  authService = inject(AuthService);
  constructor(private router: Router, private translate: TranslateService) {
    this.windowWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {}
  goToHome(): void {
    this.router.navigate(['']);
  }
  goToProfile(): void {
    if (this.isUserRole()) {
      this.router.navigate(['/profile']);
    }
    if (this.isOwnerRole()) {
      this.router.navigate(['/profile-owner']);
    }
  }
  goToPayment(): void {
    this.router.navigate(['/payment']);
  }
  goToSuscriptions(): void {
    this.router.navigate(['/suscriptions']);
  }
  useLanguage(lang: string) {
    this.translate.use(lang);
  }
  isUserRole(): boolean {
    return this.authService.getUser().role === 'ROLE_TENANT';
  }

  isOwnerRole(): boolean {
    return this.authService.getUser().role === 'ROLE_OWNER';
  }
}
