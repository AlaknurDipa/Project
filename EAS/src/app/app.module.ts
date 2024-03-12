import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { AddUserComponent } from './add-user/add-user.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
=======
import { ProfileComponent } from './profile/profile.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';
>>>>>>> 895d801d4a13966597fd0c61795836b5d4507fdd

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    
    AddUserComponent,
    ProfileComponent,
    
    SidebarComponent,
<<<<<<< HEAD
    AddUserComponent,
    LoginComponent,
    UsersComponent
=======
         DashboardComponent,
         AppraisalFormComponent
>>>>>>> 895d801d4a13966597fd0c61795836b5d4507fdd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
