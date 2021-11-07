import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   User;
   UserId;

  constructor(
    private afs: AngularFirestore,
    private AuthApi:AuthService
     ) {
    this.User = this.AuthApi.authState;
    this.UserId = this.AuthApi.currentUserId
   }


  getCart(){
    return this.afs.collection('MembersCart').valueChanges();
  }

  AddCart(product){
    console.log(this.UserId)
      this.afs.collection('MembersCart',ref=>ref.where('id','==',product.id).where('userId','==',this.UserId)).get().subscribe(item => {
        if(item.empty){
          this.afs.collection('MembersCart').add({...product, count: 1});
        }else{
          item.forEach(e => {
            const Id = e.id;
            this.afs.collection('MembersCart').doc(Id).update(product);
          });
        }
      })
  }

  updateCart(product){
    this.afs.collection('MembersCart',ref=>ref.where('userId','==',this.UserId).where('id','==',product.id)).get().subscribe(item=>{
       item.forEach(e => {
            const Id = e.id;
            this.afs.collection('MembersCart').doc(Id).update(product);
          });
    })
  }

  deleteCart(product){
    this.afs.collection('MembersCart',ref=>ref.where('userId','==',this.UserId).where('id','==',product.id)).get().subscribe(item=>{
       item.forEach(e => {
            const Id = e.id;
            this.afs.collection('MembersCart').doc(Id).delete();
          });
    })
  }
}
