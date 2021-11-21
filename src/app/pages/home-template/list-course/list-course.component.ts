import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})
export class ListCourseComponent implements OnInit {
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
