import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollCourseRoutingModule } from './enroll-course-routing.module';
import { EnrollCourseComponent } from './enroll-course.component';


@NgModule({
  declarations: [
    EnrollCourseComponent
  ],
  imports: [
    CommonModule,
    EnrollCourseRoutingModule
  ]
})
export class EnrollCourseModule { }
