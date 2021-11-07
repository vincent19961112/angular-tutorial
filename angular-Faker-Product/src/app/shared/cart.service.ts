import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore) { }

  getCartlist(){
   return this.afs.collection('carts').valueChanges();
  }
  addCartList(cart: Cart){
    this.afs.collection('carts').doc(cart.uid).set(cart);
  }
  updateCartList(cart:Cart){
    this.afs.collection('carts').doc(cart.uid).update(cart);
  }
  removelist(cart: Cart){
    this.afs.collection('carts').doc(cart.uid).delete();
  }

}
