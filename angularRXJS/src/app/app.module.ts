import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwitchmapComponent } from './components/navbar/switchmap/switchmap.component';
import { MergemapComponent } from './components/navbar/mergemap/mergemap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitchmapComponent,
    MergemapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
