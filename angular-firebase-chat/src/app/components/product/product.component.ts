import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private ApiProduct: ProductService,
    private ApiCart: CartService,
    private AuthApi:AuthService
    ) {
      this.UserId = this.AuthApi.currentUserId;
    }
  UserId;
  type = 'Productname';
  boss:boolean;
  search;
  Products ;
  selectTypes;
  carts;
  total = 0;
  //
  clickcart = false;

  ngOnInit(): void {
    this.IsBoss();
  }

  IsBoss(){
    console.log(this.UserId);
    if(this.UserId == 'o6EtzXQjBPMhzfyIeUDtgI46D3y2'){
      this.boss = true;
      this.getProduct();
    }else{
      this.boss = false;
      this.getProduct();
      this.getCart();
    }
  }

  getProduct(){
   this.ApiProduct.getProducts().subscribe(data => {
     this.Products = data;
   });
   this.ApiProduct.getProducts().subscribe(data => {
     data.filter(e => {
      const image = 'image';
      const id = 'id';
      const description = 'description';
      delete e[image];
      delete e[id];
      delete e[description]
      this.selectTypes = Object.keys(e);
     });
   });
  }

  fakerProduct(){
    this.ApiProduct.addfakerProduct();
  }

  Search(search){
    this.ApiProduct.getProducts().subscribe(data => {
        this.Products = data;
      });
    if (search){
   this.ApiProduct.getProducts().subscribe(data => {
      const typename = this.type;
      this.Products = data.filter((char) => char[typename].toLowerCase().includes(search));
      });
  }
  }

//cart
  getCart():any{
      if(!this.boss){
        this.ApiCart.getCart().subscribe(data => {
          console.log(data);
          this.carts = data.filter((x: any) => x.userId === this.UserId);;
          this.total = 0;
          this.carts.map((e:any) => {
          this.total = this.total + (e.price) * (e.count);
          });
        });
      }
  }

  addCart(product){
    this.ApiCart.AddCart({...product,'userId':this.UserId});
  }

  cartion(){
    this.clickcart = !this.clickcart;
  }

  addcount(product){
    product.count++;
    if(product.count >= 99){
    product.count = 99;
    }
    this.ApiCart.updateCart({...product,'userId':this.UserId});
  }
  decCount(product){
    product.count--;
    if(product.count <= 0){
      product.count = 0;
      this.ApiCart.deleteCart(product.id);
    }
    this.ApiCart.updateCart({...product,'userId':this.UserId});
  }
}
