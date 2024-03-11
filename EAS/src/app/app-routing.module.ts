import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddUserComponent } from './add-user/add-user.component';

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
