
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Gallery';

  user: Observable<firebase.User>;
  constructor(private AuthService: AuthenticationService, private router: Router) { }

  ngOnInit(){
    this.user = this.AuthService.authUser();
  }

  logout(){
    this.AuthService.logout().then(onResolve => this.router.navigate(['login']));
  }

}
