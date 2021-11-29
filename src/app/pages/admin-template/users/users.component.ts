import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  group: any = 'GP01';
  listUser: any;
  searchText = '';
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getListusers();
  }
  getListusers() {
    this.data
      .get(
        `QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${this.group}&page=1&pageSize=10`
      )
      .subscribe((data: any) => {
        return (this.listUser = data);
      });
  }
  onEdit() {
    console.log(123);
  }
}
