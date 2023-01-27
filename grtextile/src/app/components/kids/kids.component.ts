import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  data: any
  constructor(private http: HttpClient){
    this.data = []
  }
   
  ngOnInit() {
    this.http.get('http://localhost:4000/products/kids')
    .subscribe((res) => {
      console.log(res)
      this.data = res
    });
      
  }
}
