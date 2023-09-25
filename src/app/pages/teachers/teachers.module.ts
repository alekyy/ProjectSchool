import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeachersdMaterialModule } from '@app/shared/materials/teachers-material.module';
import { SharedModule } from '@app/shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';

@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule,
    TeachersdMaterialModule,
  ],
})
export class TeachersModule {}
