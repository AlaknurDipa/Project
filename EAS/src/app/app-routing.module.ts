import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

import { AddUserComponent } from './add-user/add-user.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },{
    path:"sidebar",
    component:SidebarComponent
  },{
    path:"add-user",
    component:AddUserComponent
  },{
    path:"sign-in",
    component:LoginComponent
=======
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  }, 
   {
    path: 'profile',
    component: ProfileComponent
  }, 
  {
    path: "sidebar",
    component: SidebarComponent,
    children: [
  
      {
        path: "",
        component: DashboardComponent
      },{
        path:"appraisal-form",
        component:AppraisalFormComponent
      }
 ,
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: "add-user",
      component: AddUserComponent
    },{
      path: "dashboard",
      component: DashboardComponent
    }
    ]
>>>>>>> 895d801d4a13966597fd0c61795836b5d4507fdd
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule,

  ]
})
export class AppRoutingModule { }
