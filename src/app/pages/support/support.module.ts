import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SupportdMaterialModule } from '@app/shared/materials/support-material.module';
import { SharedModule } from '@app/shared/shared.module';
import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SharedModule,
    SupportdMaterialModule,
  ],
})
export class SupportModule {}
