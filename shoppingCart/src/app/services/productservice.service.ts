import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  products: Product[] = [
    new Product(1, 820, 'javascript', 'asdf', 'happy bairday to myself'),
    new Product(2, 543, 'Html', 'asdf', 'all day feel not good'),
    new Product(3, 245, 'CSS', 'asdf', 'me father is bad man'),
    new Product(4, 460, 'Java', 'asdf', 'get me time'),
    new Product(5, 198, 'C#', 'asdf', 'is you are all real'),
    new Product(6, 500, 'C++', 'asdf', 'how are you ?'),
    new Product(7, 20, 'node.js', 'asdf', 'good bad is not really'),
    new Product(1, 820, 'python', 'asdf', 'happy bairday to myself'),
    new Product(2, 543, 'Angular', 'asdf', 'all day feel not good'),
    new Product(3, 245, 'Vue', 'asdf', 'me father is bad man'),
    new Product(4, 460, 'react', 'asdf', 'get me time'),
    new Product(5, 198, 'Ruby on Rail', 'asdf', 'is you are all real'),
    new Product(6, 500, 'JQuery', 'asdf', 'how are you ?'),
    new Product(7, 20, 'boostrap', 'asdf', 'good bad is not really'),
  ];

  constructor() {}

  getproduct() {
    console.log('From productService:', this.products);
    return this.products;
  }
}
