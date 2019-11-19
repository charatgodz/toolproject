import { SharedsModule } from './../shareds/shareds.module';
import { ToolmanagementRouting } from './toolmanagement.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TmContentComponent } from './components/tm-content/tm-content.component';
import { LoanComponent } from './components/loan/loan.component';
import { InventoryComponent } from './components/inventory/inventory.component';



@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, TmContentComponent, LoanComponent, InventoryComponent],
  imports: [
    CommonModule,
    ToolmanagementRouting,
    SharedsModule
  ]
})


export class ToolmanagementModule { }
