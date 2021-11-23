import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  courses: any = [];
  categoryName: any;
  group: any = 'GP01';
  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCategoryCourse();
  }
  getParamsFromUrl() {
    this.categoryName =
      this.activatedRoute.snapshot.paramMap.get('category-name');
    // Lấy nhiều params từ url
    this.activatedRoute.queryParams.subscribe((params: any) => {});
  }

  getDetailCategoryCourse() {
    this.data
      .get(
        `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${this.categoryName}&MaNhom=${this.group}`
      )
      .subscribe((res: any) => {
        this.courses = res;
      });
  }
}
