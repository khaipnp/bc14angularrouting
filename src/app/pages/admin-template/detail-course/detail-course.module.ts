import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCourseComponent } from './detail-course.component';
import { ChildDetailCourseComponent } from './child-detail-course/child-detail-course.component';


@NgModule({
  declarations: [
    DetailCourseComponent,
    ChildDetailCourseComponent
  ],
  imports: [
    CommonModule,
    DetailCourseRoutingModule
  ]
})
export class DetailCourseModule { }
