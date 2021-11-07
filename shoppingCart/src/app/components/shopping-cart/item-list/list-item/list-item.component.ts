import { MessageService } from "./../../../../services/message.service";

import { Product } from "./../../../../models/product";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
})
export class ListItemComponent implements OnInit {
  productItems: Product[] = [];
  constructor(private Msg: MessageService) {}

  ngOnInit(): void {
    this.Msg.getMsg().subscribe((product: Product) => {
      this.addToCart(product);
    });
  }
  addToCart(product: Product) {
    console.log("From list item.ts", product);
    this.productItems.push(product);
    console.log("push the product to productItems", this.productItems);
  }
}
