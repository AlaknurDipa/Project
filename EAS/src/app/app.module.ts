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
import { UserhelpComponent } from './userhelp/userhelp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeAprraisalsComponent } from './employee-aprraisals/employee-aprraisals.component';
import { ReviewAppraisalComponent } from './review-appraisal/review-appraisal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppraisalFormComponent,
    UserhelpComponent,
    EmployeeAprraisalsComponent,
    ReviewAppraisalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
