import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooderComponent } from './components/shared/fooder/fooder.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ItemListComponent } from './components/shopping-cart/item-list/item-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ListItemComponent } from './components/shopping-cart/item-list/list-item/list-item.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { JumbortronComponent } from './components/shared/jumbortron/jumbortron.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavComponent,
    FooderComponent,
    HeaderComponent,
    ShoppingCartComponent,
    FilterComponent,
    ItemListComponent,
    CartComponent,
    ListItemComponent,
    CartItemComponent,
    JumbortronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
