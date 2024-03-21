import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  name:string='';
  designation:string='';
  user_id:number=0;
  user_name:string=''
  manager_id:number=0;
  manager_name:string=''
  email:string=''
  contact:string='';
  location:string=''
  aadhar:string=''
  pan_number:string=''
  gender:string=''
  maritalStatus:string=''
  dob:any;
  accno:string='';
  ifsccode:string=''
  role:string=''
  readonly:boolean=true;
  password:string=''
  address:string=''
  dept_id:number=0;
  userID:number=0
  constructor(private activeRoute:ActivatedRoute,private http:HttpClient){

  }
  ngOnInit(){
  
    this.user_id = this.activeRoute.snapshot.params['Id'];
   
    
    this.http.get("http://localhost:8080/user/getUserById/"+1).subscribe((response:any)=>{
        
        this.name=response.first_name+" "+response.last_name;
        this.designation = response.designation;
        this.user_id=response.user_id
        this.user_name=response.user_name
        this.manager_id=response.manager_id
        this.manager_name=response.manager_name
        this.email=response.email
        this.contact=response.contact_number
        this.location=response.location
        this.aadhar=response.adhar_number
        this.pan_number=response.pan_number
        this.gender=response.gender
        this.maritalStatus=response.marital_status
        this.dob=response.date_of_birth
        this.accno=response.bank_account
        this.ifsccode=response.ifsc_code
        this.role=response.role
        this.address=response.address
        this.password=response.password
        this.dept_id=response.dept_id

    })
  }

  edit(){
    this.readonly= false
  }
  save(){
    this.readonly= true
    const userData={
    "user_id": this.user_id,
    "password": this.password ,
    "manager_id": this.manager_id,
    "manager_name": this.manager_name,
    "designation": this.designation,
    "role": this.role,
    "contact_number": this.contact,
    "email": this.email,
    "location": this.location,
    "first_name": this.name.split(' ')[0],
    "last_name": this.name.split(' ')[1],
    "dept_id": this.dept_id,
    "pan_number": this.pan_number,
    "adhar_number": this.aadhar,
    "gender": this.gender,
    "marital_status": this.maritalStatus,
    "address": this.address,
    "date_of_birth": this.dob,
    "bank_account": this.accno,
    "user_name":this.user_name,
    "ifsc_code": this.ifsccode
    }
    debugger
    this.http.post("http://localhost:8080/user/adduser",userData).subscribe((response)=>[
      console.log(response)
    ])
  }


}
