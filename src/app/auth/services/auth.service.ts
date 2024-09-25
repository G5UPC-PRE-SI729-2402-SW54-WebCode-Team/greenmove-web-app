import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<IUser | null>;

  constructor(private router: Router) {

    const itemUser = JSON.parse(localStorage.getItem('userGreen') || 'null');
    this.userSubject = new BehaviorSubject<IUser | null>(itemUser);
  }

  login(user: IUser) {
    localStorage.setItem('userGreen', JSON.stringify(user));
    this.userSubject.next(user);
  }

  isAuthenticated(): boolean {
    return !!this.userSubject.value?.jwtToken;
  }

  logout() {
    localStorage.removeItem('userGreen');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  getUser() {
    return this.userSubject.value;
  }
}
