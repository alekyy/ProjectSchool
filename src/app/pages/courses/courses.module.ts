import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesdMaterialModule } from '@app/shared/materials/courses-material.module';
import { SharedModule } from '@app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    CoursesdMaterialModule,
  ],
})
export class CoursesModule {}