import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RenderTableUserComponent } from './render-table-user/render-table-user.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    RenderTableUserComponent,
    FilterPipe,
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
