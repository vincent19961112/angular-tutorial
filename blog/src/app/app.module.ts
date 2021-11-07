import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { PostComponent } from './components/post/post.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//material
import { MaterialModule } from './models/material/material.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { FoodsComponent } from './components/dashbord/foods/foods.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/dashbord/about/about.component';
import { ProductsComponent } from './components/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    PostComponent,
    NavbarComponent,
    FoodsComponent,
    FooterComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
