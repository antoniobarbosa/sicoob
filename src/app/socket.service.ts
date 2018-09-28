import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }
  private url = 'http://localhost';
  private socket;

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }
  emit(dest,obj) {
    this.socket.emit(dest, obj);
  }


  getVotos() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}



