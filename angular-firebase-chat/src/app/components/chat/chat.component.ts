import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  users = [];
  hasname = [];
  nickname = '';
  constructor(private chatApi: ChatService,private router: Router) { }

  ngOnInit(): void {
  this.chatlogin();
  }
  chatlogin(){
    const localstorage = localStorage.getItem('nickname');
    this.nickname = localstorage;
    if(localstorage){
      this.router.navigate(['/roomlist']);
    }
    this.chatApi.getUsers().subscribe(data=>{
      data.forEach(e => {
        const item = e.data();
        this.users.push(item);
      });
      this.users.map(item =>{
        this.hasname.push(item.nickname);
      })
    })
  }

  addnickname(nickname){
    if(this.hasname.includes(nickname))
      {
      localStorage.setItem('nickname', nickname);
      this.router.navigate(['/roomlist']);
      }else{
      localStorage.setItem('nickname', nickname);
      this.chatApi.addUsers( {"nickname":`${nickname}`});
      this.router.navigate(['/roomlist']);
      }
  }

}
