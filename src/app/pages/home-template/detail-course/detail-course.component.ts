import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  id: any;
  course: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCourse();
  }
  getParamsFromUrl() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // Lấy nhiều params từ url
    this.activatedRoute.queryParams.subscribe((params: any) => {});
  }

  getDetailCourse() {
    this.data.getCourseDeatail(this.id).subscribe((res: any) => {
      this.course = res;
    });
  }
}
