import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { PaymentManagmentComponent } from './payment/pages/payment-managment/payment-managment.component';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    component: PaymentManagmentComponent,
    title: 'Payment',
    canActivate: [AuthGuard],
  },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
