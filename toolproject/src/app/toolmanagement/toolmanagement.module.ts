import { ToolmanagementRouting } from './toolmanagement.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TmContentComponent } from './components/tm-content/tm-content.component';



@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, TmContentComponent],
  imports: [
    CommonModule,
    ToolmanagementRouting
  ]
})


export class ToolmanagementModule { }
