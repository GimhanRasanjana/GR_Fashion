import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  chatVisible:boolean=false

  changeChatVisible(){
    this.chatVisible=!this.chatVisible
  }
}
