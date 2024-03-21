import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
 
  mycontrol = new FormControl();

  constructor(private http:HttpClient){};
  departments:any;

  ngOnInit(){
    this.http.get("http://localhost:8080/api/v1/departments").subscribe(result=>{
      this.departments=result;
    }  
    )
  }
  
}
