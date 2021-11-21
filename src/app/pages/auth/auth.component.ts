import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}
  loginCheck(user: any) {
    this.dataService.post('QuanLyNguoiDung/DangNhap', user).subscribe((res) => {
      if (res.maLoaiNguoiDung === 'GV') {
        localStorage.setItem('UserAdmin', JSON.stringify(res));
        this.router.navigate(['/admin/dashboard']);
      } else {
        console.log('Tai khoan khong hop le');
      }
    });
  }
}
