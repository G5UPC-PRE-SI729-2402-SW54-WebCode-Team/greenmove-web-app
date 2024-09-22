import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { PaymentManagmentComponent } from './payment/pages/payment-managment/payment-managment.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LayoutComponent } from './public/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./public/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
        title: 'Home',
      },
      {
        path: 'rental/successful',
        loadComponent: () =>
          import(
            './rental/pages/successful-booking/successful-booking.component'
          ).then((m) => m.SuccessfulBookingComponent),
        title: 'Success',
      },
      {
        path: 'payment',
        loadComponent: () =>
          import('./public/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
    ],
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
