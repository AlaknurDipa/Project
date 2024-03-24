import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatSliderModule} from '@angular/material/slider';
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

import { EmployeeAprraisalsComponent } from './employee-aprraisals/employee-aprraisals.component';
import { ReviewAppraisalComponent } from './review-appraisal/review-appraisal.component';

import {MatSelectModule} from '@angular/material/select';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormControl } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule ,Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
import { SelfAppraisalComponent } from './self-appraisal/self-appraisal.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ToastrModule } from 'ngx-toastr';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';import { AppraisaldataComponent } from './appraisaldata/appraisaldata.component';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    ReviewAppraisalComponent,
    SelfAppraisalComponent,
    AppraisaldataComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
