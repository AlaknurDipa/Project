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

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },{
    path:"sidebar",
    component:SidebarComponent,
    children:[
      {
        path : "",
        component:DashboardComponent
      },
        {
          path:"add-user",
          component:AddUserComponent
        },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path:"appraisal-form",
            component:AppraisalFormComponent
          },{
            path: "dashboard",
            component: DashboardComponent
          },{
            path: "users",
            component: UsersComponent
          },{
            path: "userhelp",
            component: UserhelpComponent
          }
        
    
    ]

  },{
    path:"sign-in",
    component:LoginComponent
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
