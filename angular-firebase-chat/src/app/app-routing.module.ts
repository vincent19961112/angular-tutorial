import { CheckoutSuccessfullyComponent } from './components/checkout-successfully/checkout-suessfully.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddroomComponent } from './components/roomlist/addroom/addroom.component';
import { ChatroomComponent } from './components/roomlist/chatroom/chatroom.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { RoomlistComponent } from './components/roomlist/roomlist.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'product', component: ProductComponent , canActivate: [AuthGuard]},
  {path: 'detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
  {path: 'roomlist', component: RoomlistComponent, canActivate: [AuthGuard]},
  {path: 'roomlist/:id', component: ChatroomComponent, canActivate: [AuthGuard]},
  {path: 'addroom', component: AddroomComponent, canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  {path: 'checkoutSuccessfully', component: CheckoutSuccessfullyComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
