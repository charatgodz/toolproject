import { tmURL } from './toolmanagement.url';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
    {path: tmURL.toolmanagement, component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolmanagementRouting { }
