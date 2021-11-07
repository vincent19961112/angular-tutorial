import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatIconModule,MatProgressBarModule],
  exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatIconModule,MatProgressBarModule]
})
export class MaterialModule { }
