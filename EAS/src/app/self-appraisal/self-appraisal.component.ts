import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-self-appraisal',
  templateUrl: './self-appraisal.component.html',
  styleUrls: ['./self-appraisal.component.css'],
  

})
export class SelfAppraisalComponent {
    self_rating:number=0
    appraiser_rating:number=0
    project:any;
    start_date:any
    end_date:any
    task_list:string=''
    user_id:number=0;
    manager_id:number=0;
    role:any;
    Projects:any;
    constructor(private  http:HttpClient,private route:ActivatedRoute){}

    ngOnInit(){
      this.user_id = this.route.snapshot.params['Id'];
      this.http.get("http://localhost:8080/user/getUserById/"+this.user_id).subscribe((response:any)=>{
         
          this.manager_id=response.manager_id
          this.role=response.role
        })
      this.getAllProjects(); 
    }

    getAllProjects(){
      this.http.get("http://localhost:8080/user/getprojects").subscribe((response:any)=>{
        this.Projects=response;
        console.log(response)
      })
    }
    
    SaveProject(){
       if(this.self_rating!==0 && this.project!=='' && this.start_date!==undefined && this.end_date!== undefined && this.task_list!==null){
          
        
        const project={
          "userId": 1,
          "projectName": this.project,
          "startDate": this.start_date,
          "endDate": this.end_date,
          "task": this.task_list,
          "selfRating":this.self_rating,
          "appraisarRating": this.appraiser_rating
        }
         this.http.post("http://localhost:8080/user/addproject",project).subscribe((response)=>{
            this.getAllProjects()
         })
         
            
       }else{
           alert("erro")
       }
    }


  
}
