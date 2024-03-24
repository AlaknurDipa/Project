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
import { EmployeeAprraisalsComponent } from './employee-aprraisals/employee-aprraisals.component';
import { ReviewAppraisalComponent } from './review-appraisal/review-appraisal.component';
import { SelfAppraisalComponent } from './self-appraisal/self-appraisal.component';
import { AppraisaldataComponent } from './appraisaldata/appraisaldata.component';




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
      },
      {
          path:'appraisaldata/:id',
          component:AppraisaldataComponent
      },
      {
        path:"appraisal-form/:id",
        component:AppraisalFormComponent
      },
      {
      path: 'profile/:id',
      component: ProfileComponent
      },
      {
      path: "users/:id/:type",
      component: AddUserComponent
      },
      {
      path: "users/:id/:type/:id",
      component: AddUserComponent
      }
      
      ,
      {
      path: "dashboard",
      component: DashboardComponent
      },{
        path:'self-appraisal/:id',
        component:SelfAppraisalComponent
      },
      {
      path: 'users/:id',
      component: UsersComponent
      },
      {
      path: 'userhelp/:id',
      component: UserhelpComponent
      },
      {
        path:'employee-appraisals/:id',
        component:EmployeeAprraisalsComponent
      },
      {
        path:'review-appraisal/managerId=/:id/:emp_id',
        component:ReviewAppraisalComponent
      },

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
