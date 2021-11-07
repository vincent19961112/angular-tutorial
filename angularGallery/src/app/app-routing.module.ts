import { UploadComponent } from './upload/upload.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthenticationGuard } from './services/authentication-guard.service';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard] },
  { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]  },
  { path: 'gallery/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]  },
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
