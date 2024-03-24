import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent {

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute){};
  user_id:any

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  users:any;
  Projects:any;
  fetchRatings:any;

  c_rating:number=0;
  v_rating:number=0;
  project_rating:number=0;
  appraisalStatus:string=''

  ngOnInit()
  {
    this.user_id = JSON.parse(this.activatedRoute.snapshot.params['Id']);
    console.log(this.user_id)
    this.http.get("http://localhost:8080/api/v1/users/getById/"+this.user_id).subscribe(result=>{
      this.users=result;})
      // console.log(this.users)

    this.http.get("http://localhost:8080/api/v1/getProjectById/"+this.user_id).subscribe((response:any)=>{
    this.Projects=response;
    
      for(let i=0;i<this.Projects.length;i++)
      {
        this.project_rating+=this.Projects[i].selfRating+this.Projects[i].appraisarRating;
      }
      this.project_rating=((this.project_rating/(this.Projects.length*2))/5)*100;
    })

    this.http.get("http://localhost:8080/api/v1/ratings/getById/"+this.user_id).subscribe((result:any)=>
    {
      this.fetchRatings=result;
      for(let i=0;i<4;i++)
      {
        this.v_rating+=this.fetchRatings[i].self_rating+this.fetchRatings[i].appraiser_rating;
      }

      this.v_rating=((this.v_rating/8)/5)*100;
      
      for(let i=4;i<8;i++)
      {
        this.c_rating+=this.fetchRatings[i].self_rating+this.fetchRatings[i].appraiser_rating;
      }

      this.c_rating=((this.c_rating/8)/5)*100;
   
    })

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
  }

}
