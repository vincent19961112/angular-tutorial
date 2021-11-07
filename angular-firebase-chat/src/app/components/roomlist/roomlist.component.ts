import { Component, OnInit } from '@angular/core';
import { ChatService } from './../../services/chat.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {

  nickname = '';
  hasrooms = [];
  constructor(
    private chatApi: ChatService,
    private router: Router
    ) { }

  ngOnInit(): void {
  this.nickname = localStorage.getItem('nickname');

  this.chatApi.getRoomname().subscribe(data => {
      data.forEach(e => {
        const item = e.data();
        this.hasrooms.push(item);
      });
    });
  }

  enterChatRoom(roomname){
    const chat = {roomname: '', nickname: '', message: '', date: null, type: ''};
    chat.roomname = roomname;
    chat.nickname = this.nickname;
    chat.message = `${this.nickname}進入`;
    chat.date = new Date().toLocaleString();
    chat.type = 'join';

    const user = {roomname: '', nickname: '', status: ''};
    user.roomname = roomname;
    user.nickname = this.nickname;
    user.status = 'online';

    this.chatApi.addchat(chat);

    this.chatApi.addchatusers(user);

    this.router.navigate([`/roomlist/${roomname}`]);
  }

}
