import { ToolmanagementRouting } from './toolmanagement.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ToolmanagementRouting
  ]
})


export class ToolmanagementModule { }
