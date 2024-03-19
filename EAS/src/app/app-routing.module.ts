import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';
import { UsersComponent } from './users/users.component';
import { UserhelpComponent } from './userhelp/userhelp.component';
import { SelfAppraisalComponent } from './self-appraisal/self-appraisal.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"add-user",
    component:AddUserComponent
  },
  {
    path:"sign-in",
    component:LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }, 
  {
    path: "sidebar/:Id",
    component: SidebarComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },{
        path:"appraisal-form/:Id",
        component:AppraisalFormComponent
      },
      {
      path: 'profile',
      component: ProfileComponent
      },
      {
      path: "add-user",
      component: AddUserComponent
      },
      {
      path: "dashboard",
      component: DashboardComponent
      },{
        path:'self-appraisal',
        component:SelfAppraisalComponent
      }
    ]
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
