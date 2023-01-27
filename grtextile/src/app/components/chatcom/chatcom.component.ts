import { Component, OnInit } from '@angular/core';
import { SocketClientService } from 'src/app/services/socket-client.service';
@Component({
  selector: 'app-chatcom',
  templateUrl: './chatcom.component.html',
  styleUrls: ['./chatcom.component.css']
})
export class ChatcomComponent implements OnInit {
  chatPanel:string =""

  constructor(
    private chatService: SocketClientService,
  ) { }

  ngOnInit() {
    this.chatService.onNewMessage().subscribe(msg => {
      console.log('got a msg: ' + msg);
      this.chatPanel+= `<div class="row d-flex flex-row m-2 msg-row">
                
      <div class="bg-light rounded  col-auto">
        <div class="font-weight-bold mb-1">Admin</div>
        ${msg}
      </div>
    </div>`
    });
  }

  sendButtonClick(msgFORM: {msg: string}) {
    console.log(msgFORM)
    this.chatService.sendMessage(msgFORM.msg);
    this.chatPanel+= `<div class="row d-flex flex-row-reverse m-2 msg-row">            
      <div class="bg-light rounded  col-auto">
        <div class="font-weight-bold mb-1">You</div>
        ${msgFORM.msg}
      </div>
    </div>`
  }
}
