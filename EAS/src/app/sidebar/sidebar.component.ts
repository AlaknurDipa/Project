import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userId:number=0;
  role:string=''
  constructor(private activeRoute:ActivatedRoute,private http:HttpClient){

  }
  ngOnInit(){
    this.userId = JSON.parse( this.activeRoute.snapshot.params['Id'])

    this.http.get("http://localhost:8080/api/v1/users/getById/"+this.userId).subscribe((response:any)=>{
      this.role=response.role
    })
    
  }

  
}
