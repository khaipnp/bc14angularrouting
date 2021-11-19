import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './pages/home-template/home-template.component';

const routes: Routes = [
  // Home Template
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-template/home-template.module').then(
        (m) => m.HomeTemplateModule
      ),
  },
  // Admin Template
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-template/admin-template.module').then(
        (m) => m.AdminTemplateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
