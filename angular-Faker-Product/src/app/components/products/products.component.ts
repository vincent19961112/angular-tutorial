import { CartService } from './../../shared/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './../../shared/products.service';
import { Product } from 'src/app/shared/product';
import { Router } from '@angular/router';
import { Cart } from '../../shared/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private router:Router,
    private ProductsService: ProductsService,
    private CartService:CartService
    ) {
   }

  products$: Observable<any>;

  ngOnInit() {
  this.products$ = this.ProductsService.getFakerProducts();
  }
  gotodetail(product:Product){
    this.router.navigate([`/detail/${product.uid}`]);
  }
  addtoCart(Cart: Cart){
  Cart.count = 1;
  this.CartService.addCartList(Cart);
  }

}
