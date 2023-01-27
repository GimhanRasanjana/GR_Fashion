import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  data: any
  constructor(private http: HttpClient){
    this.data = []
  }
   
  ngOnInit() {
    this.http.get('http://localhost:4000/products/mens')
    .subscribe((res) => {
      console.log(res)
      this.data = res
    });
      
  }


}
