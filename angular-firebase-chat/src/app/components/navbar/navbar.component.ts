import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private authApi:AuthService) { }

  ngOnInit(): void {

  }
  logOut(){
    this.authApi.signOut();
  }

}
