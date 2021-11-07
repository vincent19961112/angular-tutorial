import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../shared/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;
  constructor(
    private ProductsService:ProductsService,
    private route:ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ProductsService.getFakerProduct(id).subscribe(data =>{
      this.product = data;
    });
  }

  back(){
    this.location.back();
  }

  addtoCart(product: Product){
    this.ProductsService.editFakerProduct(product);
  }


}
