import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  constructor(private afs:AngularFirestore) { }

  sendData(data){
    this.afs.collection('member-Checkout').doc().set(data);
  }
}
