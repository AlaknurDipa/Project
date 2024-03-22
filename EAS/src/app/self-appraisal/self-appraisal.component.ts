import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

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
    yourRateValueTrust:number=0;
    appraisalRateValueTrust:number=0;
    appraisalRateValueEntr:number=0;
    yourRateValueEntr:number=0;
    appraisalRateValueAtten:number=0;
    yourRateValueAtten:number=0;
    appraisalRateValueMate:number=0;
    yourRateValueMate:number=0;
    icon1 = 'home';

    category:any;
   
    
    s_srating1:number=0;
    s_srating2:number=0;
    s_srating3:number=0;
    s_srating4:number=0;
 
    a_srating1:number=0;
    a_srating2:number=0;
    a_srating3:number=0;
    a_srating4:number=0;
    AppraisalStatus:number=0;
 
    constructor(private  http:HttpClient,private route:ActivatedRoute,private _formBuilder: FormBuilder){}
    firstFormGroup = this._formBuilder.group({
      // yourCommentValueTrust: ['', Validators.required],
      // appraiserCommentTrust:['', Validators.required],
      // appraiserCommentValueEntr:['',Validators.required],
      // yourRateValueEntr:['',Validators.required]

    });
    secondFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required],
      // s_comment1:['',Validators.required]
    });
   
  
   
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


    getValueAlignemnt(ele:any){
      const ratingData=[
        {
          "user_id":this.user_id,
          "category":"Trust",
          "self_rating":this.yourRateValueTrust,
          "self_comment":ele.value.yourCommentValueTrust,
          "appraiser_rating": this.appraisalRateValueTrust,
          "appraiser_comment": ele.value.appraiserCommentTrust,
        },
        {
          "user_id":this.user_id,
          "category":"Entrepreneurship",
          "self_rating":this.yourRateValueEntr,
          "self_comment":ele.value.yourCommentValueEntr,
          "appraiser_rating": this.appraisalRateValueEntr,
          "appraiser_comment": ele.value.appraiserCommentValueEntr,
        },
        {
          "user_id":this.user_id,
          "category":"Attention To Detail",
          "self_rating":this.yourRateValueAtten,
          "self_comment":ele.value.yourCommentValueAtten,
          "appraiser_rating": ele.value.appraiserCommentValueEntr,
          "appraiser_comment": ele.value.appraiserCommentValueEntr,
        },
        {
          "user_id":this.user_id,
          "category":"Mateship",
          "self_rating":this.yourRateValueMate,
          "self_comment":ele.value.yourCommentValueEntr,
          "appraiser_rating": this.appraisalRateValueEntr,
          "appraiser_comment": ele.value.appraiserCommentValueEntr
        }
        
      ]
      this.http.post("http://localhost:8080/user/ratings/addrating",ratingData).subscribe((response)=>{
        console.log(response)
        
        
      })
    }

    addRatings(ele:any)
    {
      
      
       const ratingData=[
          {
            "user_id":this.user_id,
            "category":"Communcation",
            "self_rating":this.s_srating1,
            "self_comment":ele.value.s_comment1,
            "appraiser_rating": this.a_srating1,
            "appraiser_comment": ele.value.a_comment1,
          },
          {
            "user_id":this.user_id,
            "category":"People Management",
            "self_rating":this.s_srating2,
            "self_comment":ele.value.s_comment2,
            "appraiser_rating": this.a_srating2,
            "appraiser_comment": ele.value.a_comment2,
          },
          {
            "user_id":this.user_id,
            "category":"Client Relationship Management",
            "self_rating":this.s_srating3,
            "self_comment":ele.value.s_comment3,
            "appraiser_rating": this.a_srating3,
            "appraiser_comment": ele.value.a_comment3,
          },
          {
            "user_id":this.user_id,
            "category":"Job Knowledge",
            "self_rating":this.s_srating4,
            "self_comment":ele.value.s_comment4,
            "appraiser_rating": this.a_srating4,
            "appraiser_comment": ele.value.a_comment4,
          }
          
      ]
      this.http.post("http://localhost:8080/user/ratings/addrating",ratingData).subscribe(result=>
      {
        
        console.log(result);
        
          
      })
    }

  
}
