import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as faker from 'faker';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs: AngularFirestore) { }

  addfakerProduct(){
    const Product = {Productname: '', price: '', color: '', department: '', image: '', description: '', id: null};
    Product.Productname = faker.commerce.productName();
    Product.price = faker.commerce.price();
    Product.color = faker.commerce.color();
    Product.image = faker.image.food();
    Product.description = faker.commerce.productDescription();
    Product.department = faker.commerce.department();
    Product.id = faker.random.uuid();
    this.afs.collection('products').add(Product);
  }

  getProducts(){
    return this.afs.collection('products').valueChanges();
  }

  getProduct(Id){
    return this.afs.collection('products', ref => ref.where('id', '==', Id)).valueChanges();
  }

  getProductId(id, Product){
    return this.afs.collection('products', ref => ref.where('id', '==', id)).snapshotChanges().subscribe(data => {
      data.forEach(e => {
       const Id = e.payload.doc.id;
       this.updateProduct(Id, Product);
      });
    });
  }

  updateProduct(id, Product){
    this.afs.collection('products').doc(id).update(Product);
  }
}
