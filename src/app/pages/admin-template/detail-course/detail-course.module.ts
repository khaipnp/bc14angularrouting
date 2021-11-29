import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCourseComponent } from './detail-course.component';
import { ChildDetailCourseComponent } from './child-detail-course/child-detail-course.component';
import { ModalCourseComponent } from './modal-course/modal-course.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailCourseComponent,
    ChildDetailCourseComponent,
    ModalCourseComponent,
  ],
  imports: [CommonModule, DetailCourseRoutingModule, FormsModule],
})
export class DetailCourseModule {}
