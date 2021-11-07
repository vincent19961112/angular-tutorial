import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private afs:AngularFirestore) { }

  getCities(){
   return this.afs.collection('cities').valueChanges();
  }

  getSite_ids(){
    return this.afs.collection('site_id').valueChanges();
  }

}
