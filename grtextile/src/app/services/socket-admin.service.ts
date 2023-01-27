import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketAdminService {

  private socket: Socket;
  constructor() {
    this.socket = io('http://localhost:4000');
  }

  // EMITTER example
  sendMessage(msg: string) {
    this.socket.emit('chat message', msg);
  }

  // HANDLER example
  onNewMessage() {
    return new Observable(observer => {
      this.socket.on('admin message', msg => {
        observer.next(msg);
      });
    });
  }
}
