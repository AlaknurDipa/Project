import { Component,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-self-appraisal',
  templateUrl: './self-appraisal.component.html',
  styleUrls: ['./self-appraisal.component.css'],
  

})
export class SelfAppraisalComponent {

  @ViewChild('thankyouBox') thankyouBox: any;
  self_rating:number=0
  appraiser_rating:number=0
  project:any;
  start_date:any
  end_date:any
  task_list:string=''
  user_id:number=0;
  manager_id:number=0;
  role:string='';
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
  btn1:string='Save'
  btn2:string='Save'
  ratingData:any=[];
  ratingData1:any=[];
  
  s_srating1:number=0;
  s_srating2:number=0;
  s_srating3:number=0;
  s_srating4:number=0;

  a_srating1:number=0;
  a_srating2:number=0;
  a_srating3:number=0;
  a_srating4:number=0;
  
  fetchRatings:any=[]
  appraisalStatus:string=''

  constructor(private  http:HttpClient,private route:ActivatedRoute,private _formBuilder: FormBuilder,
    private router:Router){}
  firstFormGroup = this._formBuilder.group({
   
  });
  secondFormGroup = this._formBuilder.group({
   
  });

  goToAppraisal(){
    
    this.router.navigateByUrl('/sidebar/'+this.user_id+"/appraisaldata/"+this.user_id);
  }
  
 

 
  ngOnInit(){
    debugger
    this.user_id = this.route.snapshot.params['id'];
    this.getAllProjects();
    
    this.http.get("http://localhost:8080/api/v1/users/getById/"+this.user_id).subscribe((response:any)=>{
          
        console.log(response)
        this.manager_id=response.manager_id
        this.role=response.role
       
      })

      this.http.get("http://localhost:8080/api/v1/appraisals/"+this.user_id).subscribe((Response:any)=>{
          this.appraisalStatus = Response.appraisal_status;
        })

        this.http.get("http://localhost:8080/api/v1/ratings/getById/"+this.user_id).subscribe((result:any)=>
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

    
  }

  getAllProjects(){
    
    this.http.get("http://localhost:8080/api/v1/getProjectById/"+this.user_id).subscribe((response:any)=>{
      this.Projects=response;
    })
  }
  
  SaveProject(){
     if(this.self_rating!==0 && this.project!=='' && this.start_date!==undefined && this.end_date!== undefined && this.task_list!==null){
        
    
      this.project={
        "userId": this.user_id,
        "projectName": this.project,
        "startDate": this.start_date,
        "endDate": this.end_date,
        "task": this.task_list,
        "selfRating":this.self_rating,
        "appraisarRating": this.appraiser_rating
      }
       this.http.post("http://localhost:8080/api/v1/addproject",this.project).subscribe((response)=>{
          this.getAllProjects()
       })
       
          
     }
  }


  getValueAlignemnt(ele:any){
    
    
     this.ratingData=[
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
        "appraiser_rating": ele.value.appraiserCommentValueAtten,
        "appraiser_comment": ele.value.appraiserCommentValueAtten,
      },
      {
        "user_id":this.user_id,
        "category":"Mateship",
        "self_rating":this.yourRateValueMate,
        "self_comment":ele.value.yourCommentValueMate,
        "appraiser_rating": this.appraisalRateValueMate,
        "appraiser_comment": ele.value.appraiserCommentValueMate
      }
      
    ]
    this.btn2='Saved'
    // this.http.post("http://localhost:8080/user/ratings/addrating",this.ratingData).subscribe((response)=>{
    //   console.log(response)
      
      
    // })
  }

  addRatings(ele:any)
  {
    
      
      this.ratingData1=[
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
    this.btn1="Saved";
    // this.http.post("http://localhost:8080/user/ratings/addrating",this.ratingData1).subscribe(result=>
    // {
    //   console.log(result);
    // })
  }

  greet:any;
  msg:any;

  submitAppraisal(){


    const currentDate=new Date()
    
    const appraisal_data={
      "user_id":this.user_id,
      "manager_id": this.manager_id,
      "appraisal_date": new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDay()),
      "appraisal_status": "in progress"
    }
    console.log(appraisal_data.appraisal_date)
    
    if(this.ratingData.length>0){
      
      this.http.post("http://localhost:8080/api/v1/ratings/addrating",this.ratingData).subscribe((response)=>{
        if(this.ratingData1.length>0 && response===null)
          {
            this.http.post("http://localhost:8080/api/v1/ratings/addrating",this.ratingData1).subscribe((result)=>
            {
              if(result === null){
                


                this.http.post("http://localhost:8080/api/v1/addappraisal",appraisal_data).subscribe(result=>
                {
                  this.greet="Thank you!"
                  this.msg="Your details has been successfully submitted"
                
                    console.log(result);
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










    // category:any;
    // user_id:any;
    
    // s_srating1:number=0;
    // s_srating2:number=0;
    // s_srating3:number=0;
    // s_srating4:number=0;

    // a_srating1:number=0;
    // a_srating2:number=0;
    // a_srating3:number=0;
    // a_srating4:number=0;

    // constructor(private http:HttpClient, private activatedRoute:ActivatedRoute,private router:Router){
    //   // 
    //   // console.log(this.user_id)
    // }

    
   

    // addRatings(ele:any)
    // {
    //   this.user_id = JSON.parse(this.activatedRoute.snapshot.params['id']);
    //   console.log(this.user_id)
    //    const ratingData=[
    //       {
    //         "user_id":this.user_id,
    //         "category":"Communcation",
    //         "self_rating":this.s_srating1,
    //         "self_comment":ele.value.s_comment1,
    //         "appraiser_rating": this.a_srating1,
    //         "appraiser_comment": ele.value.a_comment1, 
    //       },
    //       {
    //         "user_id":this.user_id,
    //         "category":"People Management",
    //         "self_rating":this.s_srating2,
    //         "self_comment":ele.value.s_comment2,
    //         "appraiser_rating": this.a_srating2,
    //         "appraiser_comment": ele.value.a_comment2, 
    //       },
    //       {
    //         "user_id":this.user_id,
    //         "category":"Client Relationship Management",
    //         "self_rating":this.s_srating3,
    //         "self_comment":ele.value.s_comment3,
    //         "appraiser_rating": this.a_srating3,
    //         "appraiser_comment": ele.value.a_comment3, 
    //       },
    //       {
    //         "user_id":this.user_id,
    //         "category":"Job Knowledge",
    //         "self_rating":this.s_srating4,
    //         "self_comment":ele.value.s_comment4,
    //         "appraiser_rating": this.a_srating4,
    //         "appraiser_comment": ele.value.a_comment4, 
    //       }
          
    //   ]
    //   this.http.post("http://localhost:8080/api/v1/ratings/addrating",ratingData).subscribe(result=>
    //   {
    //     console.log(result);
    //   })
    // }
  
}
