import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-appraisal-form',
  templateUrl: './appraisal-form.component.html',
  styleUrls: ['./appraisal-form.component.css']
})
export class AppraisalFormComponent {
    currentRate:number=0;
    currentRate1:number=0;
    Id:any=0;
    constructor(private activeRoute:ActivatedRoute){

    }
    ngOnChanges(){
      this.Id=this.activeRoute.snapshot.params['Id'];
      console.log(this.Id)
    }
    ngOnInit(){

       this.activeRoute.params.subscribe(params => {
       
        this.Id = params['Id'];
        console.log(this.Id);
    });
      // this.Id=this.activeRoute.snapshot.params['Id'];
      //  console.log(this.Id)
    }

}
