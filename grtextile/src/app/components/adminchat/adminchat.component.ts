import { Component, OnInit } from '@angular/core';
import { SocketAdminService } from 'src/app/services/socket-admin.service';
@Component({
  selector: 'app-adminchat',
  templateUrl: './adminchat.component.html',
  styleUrls: ['./adminchat.component.css']
})

export class AdminchatComponent implements OnInit{
  adminChatPanel:String=``
  constructor(
    private chatService: SocketAdminService,
  ) { }

  ngOnInit() {
    this.chatService.onNewMessage().subscribe(msg => {
      console.log('got a msg to admin: ' + msg);
      this.adminChatPanel+=`<div class="row d-flex flex-row m-2">
      <div class="col-auto">
        <i class="fi fi-sr-user rounded-circle mr-1" alt="Chris Wood" width="60" height="60"></i>
        
      </div>
      <div class="bg-light rounded  col-auto">
        <div class="font-weight-bold mb-1">Web user</div>
          ${msg}
        </div>
    </div>`
    });
  }

  sendButtonClick(msgFORM: {msg: string}) {
    console.log(msgFORM)
    this.adminChatPanel+=`<div class="row d-flex flex-row-reverse m-2">
                            <div class="col-auto">
                              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40">
                              
                            </div>
                            <div class="bg-light rounded  col-auto">
                              <div class="font-weight-bold mb-1">You</div>
                              ${msgFORM.msg}
                            </div>
                          </div>`
    this.chatService.sendMessage(msgFORM.msg);

  }
}
