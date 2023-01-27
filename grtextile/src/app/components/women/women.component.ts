import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  data: any
  constructor(private http: HttpClient){
    this.data = []
  }
   
  ngOnInit() {
    this.http.get('http://localhost:4000/products/women')
    .subscribe((res) => {
      console.log(res)
      this.data = res
    });
      
  }
}
