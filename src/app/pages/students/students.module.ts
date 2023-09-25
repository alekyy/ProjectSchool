import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudentsMaterialModule } from '@app/shared/materials/students-material.module';
import { SharedModule } from '@app/shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    StudentsMaterialModule,
  ],
})
export class StudentsModule {}
