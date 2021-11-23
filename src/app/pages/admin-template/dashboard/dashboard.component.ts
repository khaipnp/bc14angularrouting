import { DataService } from '../../../_core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  listCourse = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getCourse();
  }
  getCourse() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((res) => {
        this.listCourse = res;
      });
  }
}
