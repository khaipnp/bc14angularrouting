import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [UsersComponent, AddUserComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
