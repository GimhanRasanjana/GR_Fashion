import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent {
  uploadedImageName:String="";
  images:any;
  multipleImages=[];
    constructor(private http: HttpClient,private route:Router ){
    
    }
    selectImage(event:any){
      if(event.target.files.length>0){
        const file = event.target.files[0];
        console.log(file);
        this.images = file;
        
      }
    }
    onAddProduct(LoginThings:any){
        console.log(LoginThings);
        console.log(this.uploadedImageName)
        LoginThings.productImage=this.uploadedImageName
        this.http.post('http://localhost:4000/products/addNew', LoginThings)
        .subscribe((res: any) => {
          console.log(res);
          if(res.hasOwnProperty('actionStatus') && res.actionStatus=="completed" ){
              alert(res.message)
              this.route.navigate(['addproduct'])

          }

        });
    }
    onUpload(){
      // construct formdata
      const formdata = new FormData();
      formdata.append('file', this.images);

      //post request to express backend
      this.http.post("http://localhost:4000/image/upload", formdata).
      subscribe((res:any) => {
         console.log(res)
         if(res.hasOwnProperty("message")&& res.message=="Worked"){
            this.uploadedImageName=res.imageName
         }
         // this.singleInput.nativeElement.value=""
         // this.displaySingleImage=true
         // this.displaySingleImageArray.push()
       })


 } 
}
