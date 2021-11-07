import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticComponent } from './static/static.component';
import { GridsComponent } from './grids/grids.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { GithubComponent } from './github/github.component';
import { StackOverflowComponent } from './stack-overflow/stack-overflow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    GridsComponent,
    ResponsiveComponent,
    GithubComponent,
    StackOverflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
