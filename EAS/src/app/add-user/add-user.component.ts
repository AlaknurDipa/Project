import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { R3SelectorScopeMode } from '@angular/compiler';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
 
  mycontrol = new FormControl();

  user_id:any;
  departments:any;
  data:any
  user_name:any;
  password:any;
  first_name:any;
  last_name:any;
  designation:any;
  role:any;
  email:any;
  contact_number:any;
  department="";


  manager_name:any;
  departmentbyID:any;
  particular_user:any=[];
  users:any=[];
  pageTitle:string=''
  btn_title:string='';



  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute,private router:Router){
    if(this.activatedRoute.snapshot.params['type']!=="add")
      {
        this.pageTitle="Edit User";
        this.btn_title="Save";
        this.user_id = JSON.parse(this.activatedRoute.snapshot.params['id'])
        // console.log(this.user_id);
      }
      else
      {
        this.pageTitle="New User"
        this.btn_title="Create User";
        // console.log(this.user_id);
        
      }
  };


  ngOnInit(){
    this.http.get("http://localhost:8080/api/v1/departments").subscribe(result=>{
      this.departments=result;
      // console.log(this.departments)
    }  
    )
    this.http.get("http://localhost:8080/api/v1/users").subscribe(result=>{
      this.users=result;
      console.log(this.users);
      for(let i=0;i<this.users.length;i++)
      {
          if(this.users[i].user_id==this.user_id)
          {
            this.user_name=this.users[i].user_name;
            this.password=this.users[i].password;
            this.first_name=this.users[i].first_name;
            this.last_name=this.users[i].last_name;
            this.designation=this.users[i].designation;
            this.role=this.users[i].role;
            this.email=this.users[i].email;
            this.contact_number=this.users[i].contact_number;
            this.manager_name=this.users[i].manager_name;
          }
      }
      this.department=this.departmentbyID.dept_name;
    }  
    )   
  }

  adduser()
  {
     var dept_id = this.departments.filter(
      (dept: { dept_name: any }) => dept.dept_name == this.department)[0].dept_id;

      var manager_id=this.users.filter(
        (manager :{first_name:any, last_name:any})=> manager.first_name+" "+manager.last_name === this.manager_name)[0].user_id
      
        // console.log(manager_id);
        // console.log(this.user_id);
        let userData={
          "user_id":this.user_id,
          "password": this.password,  
          "manager_id": manager_id,
          "manager_name": this.manager_name,
          "designation":this.designation,
          "role": this.role,
          "contact_number": this.contact_number,
          "email": this.email,
          "location": "",
          "first_name": this.first_name,
          "last_name": this.last_name,
          "dept_id": dept_id,
          "pan_number": "",
          "adhar_number": "",
          "gender": "",
          "marital_status": "",
          "address": "",
          "date_of_birth": "",
          "bank_account": "",
          "user_name":this.user_name,
          "ifsc_code": ""
        }
        this.http.post("http://localhost:8080/api/v1/users/adduser",userData).subscribe(result=>{
          this.data=result;
          
          
        })
        this.router.navigateByUrl('/sidebar/1/users/1')
        
  }

}
