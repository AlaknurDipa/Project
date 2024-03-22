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

  

  
  constructor(private http:HttpClient,private router:Router,private toastr: ToastrService){}
  Login(LoginData:any){
    const Data = {
      'username' : LoginData.username,
      'password': LoginData.password
      
    }
    
    
    this.http.post("http://localhost:8080/user/login",Data).subscribe((response:any)=>{
      
       if(response!==null){
        this.router.navigate(['/sidebar/'+response.user_id]);
        
       }else {
        
        this.toastr.error('', 'Invalid Credentials', {
          timeOut: 2000, // Toast display duration
          progressBar: true, // Show progress bar
          closeButton: true, // Show close button
          
        });
       }
    });
  }
    

}
