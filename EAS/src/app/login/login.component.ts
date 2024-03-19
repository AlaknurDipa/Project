import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { delay, timeout, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  
  constructor(private http:HttpClient,private router:Router){}
  Login(LoginData:any){
    const Data = {
      'username' : LoginData.username,
      'password': LoginData.password
      
    }

  
    
    this.http.post("http://localhost:8080/user/login",Data).subscribe((response:any)=>{
       console.log(response)
       debugger
       if(response!==null){
        // this.toastr.success('Successful', 'Login',{ timeOut: 1000 });
        this.router.navigate(['/sidebar/'+response.user_id]);
       }else {
        console.log("Working");
       
        // this.toastr.error('Hello world!', 'Error');
       }
    });
  }
    

}
