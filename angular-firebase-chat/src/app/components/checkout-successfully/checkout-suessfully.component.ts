import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-checkout-successfully',
  templateUrl: './checkout-successfully.component.html',
  styleUrls: ['./checkout-successfully.component.scss']
})
export class CheckoutSuccessfullyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['product']);
  }
}
