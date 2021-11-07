import { ChatService } from './../../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  roomusers;
  message;
  roomname = '';
  nickname = '';
  chats ;
  constructor(
    private chatApi: ChatService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.nickname = localStorage.getItem('nickname');
    }

  ngOnInit(): void {
    this.roomname = this.route.snapshot.paramMap.get('id');
    this.roomusers = this.chatApi.getRoomUsers(this.roomname);
    this.GetMessage(this.roomname);

  }
  GetMessage(roomname){
  this.chatApi.getmessage().subscribe(messages => {
      this.chats = messages.filter((x: any) => x.roomname === roomname);
      return this.chats;
    });
  }
  SendMessage(message){
    const chat = {roomname: '', nickname: '', type: '', message: '', date: null};
    chat.roomname = this.roomname;
    chat.nickname = this.nickname;
    chat.type = 'message';
    chat.message = message;
    chat.date = new Date().toLocaleString();
    this.chatApi.addmessage(chat);
    this.message = '';
  }

  exitChat(){
    const chat = { roomname: '', nickname: '', message: '', date: null, type: '' , status: '' };
    chat.roomname = this.roomname;
    chat.nickname = this.nickname;
    chat.message = `${this.nickname}離開`;
    chat.date = new Date().toLocaleString();
    chat.type = 'exit';
    chat.status = 'offline';
    this.chatApi.updatestatus(chat);
    this.chatApi.addmessage(chat);
    this.router.navigate(['/roomlist']);
  }

}
