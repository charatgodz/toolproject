import { tmURL } from './toolmanagement.url';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoanComponent } from './components/loan/loan.component';



const routes: Routes = [
    {path: '', redirectTo: tmURL.dashboard, pathMatch: 'full'},
    {path: tmURL.dashboard, component: DashboardComponent},
    {path: tmURL.loan, component: LoanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolmanagementRouting { }
