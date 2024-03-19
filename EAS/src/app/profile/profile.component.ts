import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    
  userID:number=0;
  constructor(private activeRoute:ActivatedRoute){

  }
  ngOnInit(){
    this.userID = JSON.parse( this.activeRoute.snapshot.params['Id'])
    
  }


}
