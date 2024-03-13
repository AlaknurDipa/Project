import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  u_id:number=1;
  Id:number=0;
  constructor(private activeRoute:ActivatedRoute){

  }
  ngOnInit(){
    this.Id = JSON.parse( this.activeRoute.snapshot.params['ID'])
    console.log(this.Id)
  }

  
}
