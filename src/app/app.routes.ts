import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
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
        path: 'reservation-manegement/:id',
        loadComponent: () =>
          import(
            './reservation/pages/reservation-management/reservation-management.component'
          ).then((m) => m.ReservationManagementComponent),
        title: 'Home',
      },
      {
        path: 'reservation/successful/:id',
        loadComponent: () =>
          import(
            './reservation/pages/successful-booking/successful-booking.component'
          ).then((m) => m.SuccessfulBookingComponent),
        title: 'Success',
      },
      {
        path: 'reserve-active',
        loadComponent: () =>
          import(
            './reservation/pages/active-reserve/active-reserve.component'
          ).then((m) => m.ActiveReserveComponent),
        title: 'Success',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import(
            './profile/pages/profile-managment/profile-managment.component'
          ).then((m) => m.ProfileManagmentComponent),
      },
      {
        path: 'profile-owner',
        loadComponent: () =>
          import(
            './owner-profile/pages/owner-profile-management/owner-profile-management.component'
          ).then((m) => m.OwnerProfileManagementComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import(
            './profile/pages/profile-managment/profile-managment.component'
          ).then((m) => m.ProfileManagmentComponent),
      },
      {
        path: 'suscriptions',
        loadComponent: () =>
          import(
            './suscription/pages/suscription-management/suscription-management.component'
          ).then((m) => m.SuscriptionManagementComponent),
      },
      {
        path: 'not-suscriptions',
        loadComponent: () =>
          import(
            './suscription/pages/not-suscription/not-suscription.component'
          ).then((m) => m.NotSuscriptionComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./public/pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
    ],
    canActivate: [AuthGuard],
  },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
