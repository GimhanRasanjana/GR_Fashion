import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'AngularHttpRequest';

  constructor(private http: HttpClient){
    
  }

  onLoginCreate(LoginThings: {username: string, password: string}){
    console.log(LoginThings);
    this.http.post('http://localhost:4000/cus/login', LoginThings)
    .subscribe((res) => {
      console.log(res);
    });
  }
}
