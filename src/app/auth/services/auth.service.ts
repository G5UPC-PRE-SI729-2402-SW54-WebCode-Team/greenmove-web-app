import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import {
  BehaviorSubject,
  catchError,
  lastValueFrom,
  Observable,
  retry,
  throwError,
} from 'rxjs';
import { Router } from '@angular/router';
import { BaseService } from '../../shared/services/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  private userSubject: BehaviorSubject<IUser | null>;

  constructor(private router: Router) {
    super();
    this.resourceEndPoint = '/authentication';
    const itemUser = JSON.parse(localStorage.getItem('userGreen') || 'null');
    this.userSubject = new BehaviorSubject<IUser | null>(itemUser);
  }

  login(user: any) {
    // localStorage.setItem('userGreen', JSON.stringify(user));
    // this.userSubject.next(user);
    return lastValueFrom(
      this.http
        .post<any>(
          `${this.resourcePath()}/sign-in`,
          JSON.stringify(user),
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(() => new Error('Error fetching register.'));
          })
        )
    ).then((response: any) => {
      const userWithToken = {
        ...response, // Esto incluye el token del servidor
      };
      localStorage.setItem('userGreen', JSON.stringify(userWithToken));

      this.userSubject.next(userWithToken);
      return response;
    });
  }

  register(user: any) {
    localStorage.setItem('userGreen', JSON.stringify(user));
    this.userSubject.next(user);
    return lastValueFrom(
      this.http
        .post<any>(
          `${this.resourcePath()}/sign-up`,
          JSON.stringify(user),
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(() => new Error('Error fetching register.'));
          })
        )
    );
  }

  putUser(user: any, id: any, type: string) {
    return lastValueFrom(
      this.http
        .put<any>(
          `${this.baseUrl}/users/${id}/${type}`,
          JSON.stringify(user),
          this.httpOptions
        )
        .pipe(
          retry(2),
          catchError(() => {
            return throwError(
              () => new Error('Error fetching vehicles by owner.')
            );
          })
        )
    );
  }

  getUserService(userId: any) {
    return lastValueFrom(
      this.http.get<any>(`${this.baseUrl}/users/${userId}`).pipe(
        retry(2),
        catchError(() => {
          return throwError(() => new Error('Error fetching user service.'));
        })
      )
    );
  }

  isAuthenticated(): boolean {
    return !!this.userSubject.value?.token;
  }

  logout() {
    localStorage.removeItem('userGreen');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  getUser() {
    return this.userSubject.value;
  }

  setUser(user: any) {
    this.userSubject.next(user);
  }
}
