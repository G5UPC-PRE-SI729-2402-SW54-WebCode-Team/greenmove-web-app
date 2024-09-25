import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentLang: string = 'en';
  languages: string[] = ['en', 'es'];

  constructor(private router: Router, private translate: TranslateService) {}
  ngOnInit(): void {}
  goToHome(): void {
    this.router.navigate(['']);
  }
  goToProfile(): void {
    this.router.navigate(['/profile']);
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
}
