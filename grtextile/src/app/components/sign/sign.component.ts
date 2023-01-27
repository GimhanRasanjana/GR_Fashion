import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  title = 'AngularHttpRequest';

  constructor(private http: HttpClient){
    
  }

  onsignCreate(signThings: {Name: string, Email: string, Pwd: string}){
    console.log(signThings);
    this.http.post('http://localhost:4000/cus/sign', signThings)
    .subscribe((res) => {
      console.log(res);
    });
 }
}
