import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/app'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
      this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
   }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.loginWithEmail(email,password);
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
         this.router.navigate(['product']);
      })
      .catch(error => {
        console.log(error)
        throw error
      })
  }

  signUpWithGoogle(){
    this.afAuth.signInWithPopup(new auth.auth.GoogleAuthProvider()).then(() => {
        console.log('登入用Gmail');
        this.router.navigate(['product']);
      })
      .catch(error => {
        console.log(error)
        throw error
      })
  }

  signOut(): void {
    this.afAuth.signOut();
    this.router.navigate(['login'])
  }
}
