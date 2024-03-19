import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {


  constructor(private http:HttpClient){};
  departments:any;

  ngOnInit(){
    this.http.get("http://localhost:8080/api/v1/departments").subscribe(result=>{
      this.departments=result;
    }  
    )
  }

}
