import { StackOverflowComponent } from './stack-overflow/stack-overflow.component';
import { GridsComponent } from './grids/grids.component';
import { GithubComponent } from './github/github.component';
import { StaticComponent } from './static/static.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveComponent } from './responsive/responsive.component';

const routes: Routes = [
  {path:'static',component:StaticComponent},
  {path:'github',component:GithubComponent},
  {path:'grid',component:GridsComponent},
  {path:'responsive',component:ResponsiveComponent},
  {path:'stackoverflow',component:StackOverflowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
