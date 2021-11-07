import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [MatCardModule, MatButtonModule,MatRadioModule],
  exports: [MatCardModule, MatButtonModule,MatRadioModule]
})
export class MaterialModule { }
