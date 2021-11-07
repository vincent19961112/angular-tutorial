import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './models/bootstrap/bootstrap.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ChatComponent } from './components/chat/chat.component';
import { RoomlistComponent } from './components/roomlist/roomlist.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ChatroomComponent } from './components/roomlist/chatroom/chatroom.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//firebase
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddroomComponent } from './components/roomlist/addroom/addroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import { MaterialModule } from './models/material/material.module';
import { DatePipe } from '@angular/common';
import { CheckoutSuccessfullyComponent } from './components/checkout-successfully/checkout-suessfully.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    ProductComponent,
    ChatComponent,
    RoomlistComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ChatroomComponent,
    AddroomComponent,
    CheckoutComponent,
    PageNotFoundComponent,
    CheckoutSuccessfullyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
