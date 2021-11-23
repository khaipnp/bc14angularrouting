import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/guards/auth.guard';
import { AdminTemplateComponent } from './admin-template.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../pages/admin-template/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../pages/admin-template/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('../../pages/admin-template/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },
      {
        path: 'detail-course/:category-name',
        loadChildren: () =>
          import('./detail-course/detail-course.module').then(
            (m) => m.DetailCourseModule
          ),
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTemplateRoutingModule {}
