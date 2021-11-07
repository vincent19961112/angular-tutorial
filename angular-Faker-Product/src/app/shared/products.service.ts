import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  afsDocument: AngularFirestoreDocument;
  afsCollection: AngularFirestoreCollection;
  constructor(
    private afs:AngularFirestore,
    ) { }
    getFakerProducts(){
     return this.afs.collection('fakerProducts').valueChanges();
    }

    getFakerProduct(id: string){
     return this.afs.collection('fakerProducts').doc(id).valueChanges();
    }

    addFakerProduct(product: Product){
      this.afs.collection('fakerProducts').doc(product.uid).set(product);
    }

    editFakerProduct(product: Product){
      this.afs.collection('fakerProducts').doc(product.uid).update(product);
    }

    deleteFakerProduct(product: Product){
   this.afs.collection('fakerProducts').doc(product.uid).delete();
    }
}
