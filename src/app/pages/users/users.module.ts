import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersMaterialModule } from '@app/shared/materials/users-material.module';
import { SharedModule } from '@app/shared/shared.module';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
    MyProfileComponent,
    MyConquestsComponent,
    MyDisciplinesComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersMaterialModule,
    SharedModule,
  ],
})
export class UsersModule {}
