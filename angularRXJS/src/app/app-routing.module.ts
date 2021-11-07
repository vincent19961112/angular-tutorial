import { MergemapComponent } from './components/navbar/mergemap/mergemap.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwitchmapComponent } from './components/navbar/switchmap/switchmap.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/navbar',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent,children:[
    {path:'switchMap',component:SwitchmapComponent},
    {path:'mergeMap',component:MergemapComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
