import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private http:HttpClient,private activeRoute:ActivatedRoute){};
  users:any;
  userId:any;
  ngOnInit(){
    this.http.get("http://localhost:8080/api/v1/users").subscribe(result=>{
      this.users=result;
      // console.log(this.users);
      console.log(this.users[0].user_id);
    }  
    )
  }

  searchTerm: string = '';

  get filteredUsers(): any[] {
    return this.users.filter((user: any) =>
      user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.user_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }



  
  deleteUser(user_id:any)
  {
    this.http.delete("http://localhost:8080/api/v1/users/deleteuser/"+user_id).subscribe(result=>
    {
      console.log(result);
    })
  }


  

}
