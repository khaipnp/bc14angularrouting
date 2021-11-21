import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  addUser(user: any) {
    user.maLoaiNguoiDung = 'HV';
    user.maNhom = 'GP01';
    this.dataService.post('QuanLyNguoiDung/DangKy', user).subscribe((res) => {
      {
        console.log(res);
      }
    });
  }
}
