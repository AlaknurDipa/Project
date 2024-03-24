import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  data:any
  
  constructor(private http:HttpClient,private router:Router){}


  Login(LoginData:any){
    
    const Data = {
      'username' : LoginData.username,
      'password': LoginData.password
      
    }
    
    this.http.post("http://localhost:8080/api/v1/login",Data).subscribe((response:any)=>{
      
       console.log(response)
       
       
       if(response!==null){
        // this.toastr.success('Successful', 'Login',{ timeOut: 1000 });
        console.log(response)
        this.router.navigate(['/sidebar/'+response.user_id]);
        
       }else {
        this.data=response
        console.log("Working");
        
        // this.toastr.error('Hello world!', 'Error');
       }
    });
  }
    

}
