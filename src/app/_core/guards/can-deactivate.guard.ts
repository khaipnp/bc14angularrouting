import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from 'src/app/pages/home-template/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: any) {
    const res =
      component.canDeactivateRegister() || window.confirm('Are you sure?');
    return res;
  }
}
