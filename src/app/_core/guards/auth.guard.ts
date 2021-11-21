import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem('UserAdmin')) {
      // Logged in so return true
      return true;
    }
    // Not logged in so redirect to login page with the return url
    this.router.navigate(['/auth']);
    return false;
  }
}
