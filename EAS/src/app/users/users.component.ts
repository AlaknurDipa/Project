import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private http:HttpClient){};
  users:any;

  ngOnInit(){
    this.http.get("http://localhost:8080/api/v1/users").subscribe(result=>{
      this.users=result;
    }  
    )
  }

}
