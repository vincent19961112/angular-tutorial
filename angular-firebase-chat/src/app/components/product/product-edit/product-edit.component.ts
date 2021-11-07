import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  Product;

  constructor(
    private ApiProduct: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getProduct();

  }
  getProduct(){
    const id = this.route.snapshot.paramMap.get('id');
    this.ApiProduct.getProduct(id).subscribe(data => {
     this.Product = data;
  });
  }

  getProductId(Product){
  const product = Product[0];
  console.log(product);
  const id = this.route.snapshot.paramMap.get('id');
  this.ApiProduct.getProductId(id, product);
  this.router.navigate(['/product']);
  }
}
