import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-aprraisals',
  templateUrl: './employee-aprraisals.component.html',
  styleUrls: ['./employee-aprraisals.component.css']
})
export class EmployeeAprraisalsComponent {

    appraisals:any;
    users:any;
   
    userId:number=0;
    list_appraisals:any
    employee_list:any

    users_sappraisal:any=[];

    constructor(private http:HttpClient,private activedRoute:ActivatedRoute){
      
        
        this.userId = JSON.parse(this.activedRoute.snapshot.params['id'])


    }

    ngOnInit()
    {

      this.http.get("http://localhost:8080/api/v1/users").subscribe(result=>
      {
        this.users=result;
        // console.log(this.users);
      })
      this.http.get("http://localhost:8080/api/v1/appraisals").subscribe((result:any)=>
      {
        
        this.appraisals=result;
        this.list_appraisals = this.appraisals.filter(
          (appraisal: { manager_id: any }) => appraisal.manager_id == this.userId);
          console.log(this.list_appraisals);
        // console.log(this.appraisals);

        for(let i=0;i<this.list_appraisals.length;i++)
        {
          this.users_sappraisal.push(this.list_appraisals[i].user_id)
          // this.users_sappraisal.push({"user_id":this.list_appraisals[i].user_id})
        }
        this.http.post("http://localhost:8080/api/v1/users/getById",this.users_sappraisal).subscribe((result)=>
        {
          console.log(this.users_sappraisal)
            this.employee_list=result;
            console.log(this.employee_list);
        })  
        // this.http.get("http://localhost:8080/api/v1/ratings/getById/"+this.).subscribe((result:any)=>
        // {
        //   console.log(result);
         
          
         

        // })
      })
  
    }


    getUser(id:any)
    {
      
    }




}
