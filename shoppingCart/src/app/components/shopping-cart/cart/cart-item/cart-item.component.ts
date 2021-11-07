import { MessageService } from "./../../../../services/message.service";
import { Product } from "./../../../../models/product";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"],
})
export class CartItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private msg: MessageService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }
}
