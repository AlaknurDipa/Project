import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-appraisaldata',
  templateUrl: './appraisaldata.component.html',
  styleUrls: ['./appraisaldata.component.css']
})
export class AppraisaldataComponent {


  constructor(private route:ActivatedRoute,private http:HttpClient,private _formBuilder: FormBuilder,){}
  user_id:any;
  value =0;
  Projects:any=[];
  Ratings:any=[];
  
  appraisalStatus:string='';


  firstFormGroup = this._formBuilder.group({
   
  });
  secondFormGroup = this._formBuilder.group({
   
  });



  ngOnInit()
  {
    this.user_id=this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/api/v1/appraisals/"+this.user_id).subscribe((Response:any)=>{
          this.appraisalStatus = Response.appraisal_status;
          if(this.appraisalStatus==='in progress')
          {
            this.value=50;
          }else if(this.appraisalStatus==='done'){
            this.value=100;
          }
          console.log(Response);
        })

        this.http.get("http://localhost:8080/api/v1/ratings/getById/"+this.user_id).subscribe((result:any)=>
        { 
          this.Ratings=result;
         
          console.log(result);
        })


        this.http.get("http://localhost:8080/api/v1/getProjectById/"+this.user_id).subscribe((response:any)=>{
        this.Projects=response;
        console.log(this.Projects);
        })
  }
}
