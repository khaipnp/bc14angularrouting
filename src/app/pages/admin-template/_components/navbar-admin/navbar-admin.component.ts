import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent implements OnInit {
  constructor(private router: Router) {}
  getLocalStorage: any = localStorage.getItem('UserAdmin');
  userInfo: any = JSON.parse(this.getLocalStorage);
  ngOnInit(): void {}

  // Logout Admin User
  logOut() {
    localStorage.removeItem('UserAdmin');
    this.router.navigate(['/auth']);
  }
}
