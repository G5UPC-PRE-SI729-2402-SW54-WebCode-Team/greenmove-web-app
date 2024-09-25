import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    RegisterComponent,
    LoginComponent,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'greenmove-web-app';
  constructor(translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  goToPayment = () => {
    this.router.navigate(['/payment']);
  };

  goToProfile = () => {
    this.router.navigate(['/profile']);
  };
}
