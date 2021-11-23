import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CategoryComponent } from './category/category.component';
import { ChildCategoryComponent } from './category/child-category/child-category.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CategoryComponent,
    ChildCategoryComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
