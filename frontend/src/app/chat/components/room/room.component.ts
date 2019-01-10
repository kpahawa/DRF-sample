import { Component, OnInit, Input } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

import { Message } from '../../models/message';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiUrlFactory } from '../../../services/api-url-factory.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  private wsSubject$: WebSocketSubject<string>;
  private messages: Message[] = [];
  private currentUser: string;
  private roomName: string;
  private curMessage = '';
  private socketURLandPort = '';

  constructor(private route: ActivatedRoute, private urlFactory: ApiUrlFactory) {
    this.socketURLandPort = this.urlFactory.getBaseUrl();
    this.route.paramMap.subscribe(params => {
      this.roomName = params.get('roomName');
    }).unsubscribe();
  }

  ngOnInit() {
    this.currentUser = sessionStorage.getItem('user');
    if (this.currentUser === null) {
      throw Error("No user name picked out. Please go back home and pick out a username");
    }
    let url = '';
    const origin = window.location.origin;
    if (origin.includes('127.0.0.1') || origin.includes('localhost')) {
      url = 'ws://127.0.0.1:8205/ws/chat/' + this.roomName;
    } else {
      url = 'ws://' + this.socketURLandPort + 'ws/chat/' + this.roomName;
    }
    console.log("url: ", url);

    this.wsSubject$ = WebSocketSubject.create(url);

    this.wsSubject$
      .subscribe(
        (message) =>  {
          console.log("server message ", message);
          const m = message as Message;
          if (m.sender !== this.currentUser) this.messages.push(m);
        },
        (err) => console.error(err),
        () => console.warn('Completed!')
      );
  }

  private sendMessage() {
    const m = new Message();
    m.message = this.curMessage;
    m.sender = this.currentUser;
    this.messages.push(m);
    this.wsSubject$.next(JSON.stringify(m));
    this.curMessage = '';
  }

}
