import { ProductserviceService } from "./../../../services/productservice.service";
import { Product } from "./../../../models/product";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  constructor(private ProductService: ProductserviceService) {}

  ngOnInit(): void {
    this.products = this.ProductService.getproduct();
  }
}
