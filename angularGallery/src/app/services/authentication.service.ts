import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth)
  {
    this.user = this.afAuth.user;
  }

  authUser(){
    return this.user;
  }

  login(user: User){
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.afAuth.signOut();
  }

}
