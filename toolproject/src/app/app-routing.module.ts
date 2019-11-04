import { AppURL } from './app.url';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '',redirectTo: AppURL.Login, pathMatch: 'full'},
  {path: AppURL.Login, component: LoginComponent},
  {path: AppURL.Authen, loadChildren: './toolmanagement/toolmanagement.module#ToolmanagementModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
