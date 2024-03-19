import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userId:number=0;
  constructor(private activeRoute:ActivatedRoute){

  }
  ngOnInit(){
    this.userId = JSON.parse( this.activeRoute.snapshot.params['Id'])
    
  }

  
}
