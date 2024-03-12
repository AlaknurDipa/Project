import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddUserComponent,
    ProfileComponent,
    SidebarComponent,
    AddUserComponent,
    LoginComponent,
    UsersComponent,
    DashboardComponent,
    AppraisalFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
