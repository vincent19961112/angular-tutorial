export class Product {
  productId: number;
  productPrice: number;
  productTitle: string;
  productImageUrl: string;
  productContentText: string;
  constructor(
    productId,
    productPrice,
    productTitle = "hello",
    productImageUrl = "",
    productContentText = "go shopping"
  ) {
    this.productId = productId;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.productImageUrl = productImageUrl;
    this.productContentText = productContentText;
  }
}
