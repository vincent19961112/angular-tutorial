import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private afs: AngularFirestore) { }

  getRoomname(){
    return this.afs.collection('rooms').get();
  }

  addRoomName(roomname){
   this.afs.collection('rooms').add(roomname);
  }

  getUsers(){
   return this.afs.collection('users').get();
  }

  addUsers(nickname){
    this.afs.collection('users').add(nickname);
  }

  addchat(chat){
    this.afs.collection('chats').add(chat);
  }

  addchatusers(user){
  this.afs.collection('roomusers', ref => ref
  .where('roomname', '==', user.roomname)
  .where('nickname', '==', user.nickname)
  ).get().subscribe(item => {
    if(item.empty){
      this.afs.collection('roomusers').add(user);
    }else{
      item.forEach(e => {
        const Id = e.id;
        this.afs.collection('roomusers').doc(Id).update(user);
      });
    }
  });
  }

  getmessage(){
  return this.afs.collection('chats', ref => ref.orderBy('date', 'desc')).valueChanges();
  }

  getRoomUsers(roomname){
  return this.afs.collection('roomusers', ref =>ref
  .where('roomname', '==', roomname)
  ).valueChanges();
  }

  addmessage(chat){
    this.afs.collection('chats').add(chat);
  }

  updatestatus(chat){
    this.afs.collection('roomusers', ref => ref
    .where('roomname', '==', chat.roomname)
    .where('nickname', '==', chat.nickname)
    )
    .get()
    .subscribe(item => {
      item.forEach(e => {
        const Id = e.id;
        this.afs.collection('roomusers').doc(Id).update(chat);
      });
    });
  }

}
