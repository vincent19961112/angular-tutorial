import { Tutorial } from './../models/tutorial';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorailService {


  private dbPath = 'tutorials';

  tutorialsRef:AngularFirestoreCollection<Tutorial> = null;

  constructor(private db:AngularFirestore) {
    this.tutorialsRef=this.db.collection(this.dbPath);
   }

   getAll():AngularFirestoreCollection<Tutorial>{
     return this.tutorialsRef;
   }

   create(tutorial:Tutorial):any{
     return this.tutorialsRef.add(tutorial)
   }

   update(id:string,data:any): Promise<void>{
     return this.tutorialsRef.doc(id).update(data);
   }
   delete(id:string): Promise<void>{
     return this.tutorialsRef.doc(id).delete()
   }

}
