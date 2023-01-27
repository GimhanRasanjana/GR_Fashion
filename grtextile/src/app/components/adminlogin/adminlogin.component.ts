import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  title = 'AngularHttpRequest';

  constructor(private http: HttpClient, private router:Router){
    
  }

  onLoginCreate(LoginThings: {username: string, password: string}){
    console.log(LoginThings);
    this.http.post('http://localhost:4000/admin/login', LoginThings)
    .subscribe((res:any) => {
      if(res.hasOwnProperty("message") && res.message=='login successful'){
        this.router.navigate(['adminpanel'])
      }else{
        alert("Invalid username  or password")
      }
      console.log(res);
    });
  }
}