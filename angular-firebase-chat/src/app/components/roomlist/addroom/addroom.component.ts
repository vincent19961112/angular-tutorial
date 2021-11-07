import { ChatService } from './../../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.scss']
})
export class AddroomComponent implements OnInit {

  roomname = '';
  hasname = [];
  hasrooms = [];

  constructor(
    private chatApi: ChatService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.chatApi.getRoomname().subscribe(data=>{
      data.forEach(e => {
        const item = e.data();
        this.hasrooms.push(item);
      });
      this.hasrooms.map(item => {
        this.hasname.push(item.roomname);
      });
    });
  }

  addroomname(roomname){
    if(this.hasname.includes(roomname)||roomname===""){
      this.router.navigate(['/roomlist']);
    }else{
      this.chatApi.addRoomName( {"roomname": `${roomname}`});
      this.router.navigate(['/roomlist']);
    }
  }

}
