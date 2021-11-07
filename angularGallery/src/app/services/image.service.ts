import { GalleryImage } from './../models/gallery-image';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private uid: string;


  constructor(private atAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.atAuth.authState.subscribe(auth => {

      if (auth !== undefined && auth !== null){
        this.uid = auth.uid;
      }
    });
   }

   getImages(){
     return this.db.list('uploads').snapshotChanges();
   }

   getImage(key: string){
    return firebase
    .database()
    .ref('uploads/' + key)
    .once('value').then(snap => snap.val());
   }
}
