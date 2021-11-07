import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home',component:DashbordComponent},
  {path:'post',component:PostComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
