import { Upload } from './../models/upload.model';
import { AngularFireDatabase  } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private basePath = '/uploads';

  constructor( private db: AngularFireDatabase) { }

  UploadFile(upload: Upload){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      (): any => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
        upload.url = url;
        upload.name = upload.file.name;
        this.saveFileDate(upload);
        });
      }
    );

  }
    private saveFileDate(upload: Upload){
      this.db.list(`${this.basePath}/`).push(upload);
      console.log('File saved!: ' + upload.url);
    }
}
