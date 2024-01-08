import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeSearchComponent } from './coffe-search.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CoffeSearchComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CoffeSearchComponent
  ]
})
export class CoffeSearchModule { }
