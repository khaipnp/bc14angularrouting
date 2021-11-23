import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-detail-course',
  templateUrl: './child-detail-course.component.html',
  styleUrls: ['./child-detail-course.component.scss'],
})
export class ChildDetailCourseComponent implements OnInit {
  @Input() course: any;
  constructor() {}

  ngOnInit(): void {}
}
