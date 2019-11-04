import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToolmanagementModule } from './toolmanagement/toolmanagement.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolmanagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
