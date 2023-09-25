import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardMaterialModule } from '@app/shared/materials/dashboard-material.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule,
    SharedModule,
  ],
})
export class DashboardModule {}
