import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate{

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.user;
   }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   return this.user.pipe(
     map( auth => {
        if (!auth){
            this.router.navigateByUrl('/login');
            return false;
            }else{
            return true;
          }
      }),
      take(1),
    )

  }
}
