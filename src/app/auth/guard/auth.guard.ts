import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = true;
  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
