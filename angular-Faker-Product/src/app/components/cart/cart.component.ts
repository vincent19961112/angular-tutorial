import { Observable } from 'rxjs';
import { CartService } from './../../shared/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
displayedColumns = ['name','image', 'price', 'count' , 'add', 'dsc', 'totalprice', 'delete'];
totalfooter = ['total'];
  cartlist$: Observable<any>;
  total = 0;
  datasource = [];
  constructor(private CartService: CartService) { }

  ngOnInit() {
    this.cartlist$ = this.CartService.getCartlist();
    this.CartService.getCartlist().subscribe(data => {
      this.datasource = data;
    })
    this.totalcal();
  }

  deleteCart(cart){
    this.CartService.removelist(cart);
    this.totalcal();
  }

  countUp(cart){

    cart.count++;

    if (cart.count >= 100){
    cart.count = 1;
    this.CartService.updateCartList(cart);
    }else{
    this.CartService.updateCartList(cart);
    }
  }
  countDown(cart){

    cart.count--;

    if (cart.count <= 0){
    this.CartService.removelist(cart);
    }else{
    this.CartService.updateCartList(cart);
    }
  }

  totalcal(){
     this.cartlist$.subscribe(data => {
       this.total = 0;
       data.map(e => {
      this.total += +e.price * e.count;
      });
    });
  }

}
