import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class FakerService {

  constructor(
    private ProductsService:ProductsService
    ) { }

    addOne() {
    const fakerProduct: Product = {
      uid: faker.random.alphaNumeric(16),
      color: faker.commerce.color(),
      department: faker.commerce.department(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      productAdjective: faker.commerce.productAdjective(),
      productMaterial: faker.commerce.productMaterial(),
      productDescription: faker.commerce.productDescription(),
      Image: faker.random.image(),
    };
this.ProductsService.addFakerProduct(fakerProduct)
  }
}
