import { ActivatedRoute, Router } from '@angular/router';
import { Component,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-review-appraisal',
  templateUrl: './review-appraisal.component.html',
  styleUrls: ['./review-appraisal.component.css']
})
export class ReviewAppraisalComponent {




  @ViewChild('thankyouBox') thankyouBox: any;

    btn1="Save";
    btn2="Save";
    self_rating:number=0
    appraiser_rating:number=0
    project:any;
    start_date:any
    end_date:any
    task_list:string=''
    emp_id:number=0;
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
    category:any;
    error:number=0;
    userId:number=0;
    ratingData:any=[];
    ratingData1:any=[];
    employeeName:any;

    appraisalId:number=0
    s_srating1:number=0;
    s_srating2:number=0;
    s_srating3:number=0;
    s_srating4:number=0;

    a_srating1:number=0;
    a_srating2:number=0;
    a_srating3:number=0;
    a_srating4:number=0;
    AppraisalStatus:number=0;
    appraisalStatus:string=''
    fetchRatings:any=[]
 
    constructor(private  http:HttpClient,private route:ActivatedRoute, private router:Router, private _formBuilder: FormBuilder){}
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
        
     
        this.emp_id=JSON.parse(this.route.snapshot.params['emp_id'])

        this.userId=JSON.parse(this.route.snapshot.params['id']);
        
        this.http.get("http://localhost:8080/api/v1/users/getById/"+this.emp_id).subscribe((response:any)=>{
          this.employeeName=response.first_name+" "+response.last_name;

        })




        this.http.get("http://localhost:8080/api/v1/users/getById/"+this.userId).subscribe((response:any)=>{
          
          
          // this.manager_id=response.manager_id
          this.role=response.role

        })
        this.http.get("http://localhost:8080/api/v1/users/getById/"+this.emp_id).subscribe((response:any)=>{
          
          
        this.manager_id=response.manager_id
        // this.role=response.role

        })


        this.http.get("http://localhost:8080/api/v1/getProjectById/"+this.emp_id).subscribe(result=>
        {
          this.Projects=result;
          

        })
        this.http.get("http://localhost:8080/api/v1/ratings/getById/"+this.emp_id).subscribe((result:any)=>
        {
          console.log(result);
          this.fetchRatings=result;
          this.s_srating1=result[0].self_rating;
          this.s_srating2=result[1].self_rating
          this.s_srating3=result[2].self_rating
          this.s_srating4=result[3].self_rating
          this.yourRateValueTrust=result[4].self_rating
          this.yourRateValueEntr=result[5].self_rating
          this.yourRateValueAtten=result[6].self_rating
          this.yourRateValueMate=result[7].self_rating
          console.log(result)

        })

        this.http.get("http://localhost:8080/api/v1/appraisals/"+this.emp_id).subscribe((Response:any)=>{
          
        
          this.appraisalId=Response.appraisal_id;
          this.appraisalStatus = Response.appraisal_status;
          console.log(Response)
          console.log(this.appraisalStatus)

        })
      
    }
 
   
    
    SaveProjectRatings(){

       
      //  if(this.self_rating!==0 && this.project!=='' && this.start_date!==undefined && this.end_date!== undefined && this.task_list!==null){
        for(let i=0;i<this.Projects.length;i++)
        {
          
          
          this.project={
            "projectId":this.Projects[i].projectId,
            "userId": this.emp_id,
            "projectName": this.Projects[i].projectName,
            "startDate": this.Projects[i].startDate,
            "endDate": this.Projects[i].endDate,
            "task": this.Projects[i].task,
            "selfRating":this.Projects[i].selfRating,
            "appraisarRating": this.appraisalRatings[i]
          }

          this.http.post("http://localhost:8080/api/v1/addproject",this.project).subscribe((response)=>{
            
            // this.getAllProjects()
         })
        }
        
        
         
         
            
      //  }
    }
 
 
    getValueAlignemnt(ele:any){
      debugger
       this.ratingData=[
        {

          "rating_id":this.fetchRatings[0].rating_id,
          "user_id":this.emp_id,
          "category":"Trust",
          "self_rating":this.yourRateValueTrust,
          "self_comment":this.fetchRatings[0].self_comment,
          "appraiser_rating": this.appraisalRateValueTrust,
          "appraiser_comment": ele.value.appraiserCommentTrust,
        },
        {
          "rating_id":this.fetchRatings[0].rating_id+1,
          "user_id":this.emp_id,
          "category":"Entrepreneurship",
          "self_rating":this.yourRateValueEntr,
          "self_comment":this.fetchRatings[1].self_comment,
          "appraiser_rating": this.appraisalRateValueEntr,
          "appraiser_comment": ele.value.appraiserCommentValueEntr,
        },
        {
          "rating_id":this.fetchRatings[0].rating_id+2,
          "user_id":this.emp_id,
          "category":"Attention To Detail",
          "self_rating":this.yourRateValueAtten,
          "self_comment":this.fetchRatings[2].self_comment,
          "appraiser_rating": this.appraisalRateValueAtten,
          "appraiser_comment": ele.value.appraiserCommentValueAtten,
        },
        {
          "rating_id":this.fetchRatings[0].rating_id+3,
          "user_id":this.emp_id,
          "category":"Mateship",
          "self_rating":this.yourRateValueMate,
          "self_comment":this.fetchRatings[3].self_comment,
          "appraiser_rating": this.appraisalRateValueMate,
          "appraiser_comment": ele.value.appraiserCommentValueMate
        }
        
      ]

      this.btn1="Saved"
      
    }
 
    addRatings(ele:any)
    {
      
        
        this.ratingData1=[
          {
            "rating_id":this.fetchRatings[0].rating_id+4,
            "user_id":this.emp_id,
            "category":"Communcation",
            "self_rating":this.s_srating1,
            "self_comment":this.fetchRatings[4].self_comment,
            "appraiser_rating": this.a_srating1,
            "appraiser_comment": ele.value.a_comment1,
          },
          {
            "rating_id":this.fetchRatings[0].rating_id+5,
            "user_id":this.emp_id,
            "category":"People Management",
            "self_rating":this.s_srating2,
            "self_comment":this.fetchRatings[5].self_comment,
            "appraiser_rating": this.a_srating2,
            "appraiser_comment": ele.value.a_comment2,
          },
          {
            "rating_id":this.fetchRatings[0].rating_id+6,
            "user_id":this.emp_id,
            "category":"Client Relationship Management",
            "self_rating":this.s_srating3,
            "self_comment":this.fetchRatings[6].self_comment,
            "appraiser_rating": this.a_srating3,
            "appraiser_comment": ele.value.a_comment3,
          },
          {
            "rating_id":this.fetchRatings[0].rating_id+7,
            "user_id":this.emp_id,
            "category":"Job Knowledge",
            "self_rating":this.s_srating4,
            "self_comment":this.fetchRatings[7].self_comment,
            "appraiser_rating": this.a_srating4,
            "appraiser_comment": ele.value.a_comment4,
          }
          
      ]
      this.btn2="Saved"
      // this.http.post("http://localhost:8080/user/ratings/addrating",this.ratingData1).subscribe(result=>
      // {
      //   console.log(result);
      // })
    }
 
    greet:any;
    msg:any;
 
    submitAppraisal(){
     
      
      this.SaveProjectRatings();
      
      
      if(this.ratingData.length>0){
        this.http.post("http://localhost:8080/api/v1/ratings/addrating",this.ratingData).subscribe((response)=>{
          if(this.ratingData1.length>0 && response===null)
            {
              this.http.post("http://localhost:8080/api/v1/ratings/addrating",this.ratingData1).subscribe((result)=>
              {
                debugger
                if(result === null){
                  const currentDate=new Date()
                  const appraisal_data={
                    
                    "appraisal_id":this.appraisalId,
                    "user_id":this.emp_id,
                    "manager_id": this.manager_id,
                    "appraisal_date": new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDay()),
                    "appraisal_status": "done"
                  }
                  
                  this.http.post("http://localhost:8080/api/v1/addappraisal",appraisal_data).subscribe(result=>
                  {
                    
                    this.greet="Thank you!"
                    this.msg="Your details has been successfully submitted"
                    
                     
                  })
                }else{
                  
                  this.greet="Error"
                  this.msg="Something went wrong"
                }
                
              })
            }else{
              
                this.greet="Error"
                this.msg="Something went wrong"
            }
        })
      }else{
        
            this.greet="Error"
            this.msg="Something went wrong"
      }
 
      
      
 
 
    }
    appraisalRatings: number[] = [];
  
    addAppraisalRating(rating: number,index:number) {
      
      if(!Number.isNaN(rating)){
        if(index < this.appraisalRatings.length)
          this.appraisalRatings[index-1]=rating;
        else
          this.appraisalRatings.push(rating)
      }
      
    }
    goToAppraisal(){  
      this.router.navigateByUrl('/sidebar/'+this.emp_id+"/appraisaldata/"+this.emp_id);
    }
    

      
}
