import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-child-detail-course',
  templateUrl: './child-detail-course.component.html',
  styleUrls: ['./child-detail-course.component.scss'],
})
export class ChildDetailCourseComponent implements OnInit {
  @Input() course: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {}
  onDeleteCourse(code: any) {
    this.data
      .del(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${code}`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
