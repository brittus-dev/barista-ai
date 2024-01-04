import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeSearchComponent } from './coffe-search.component';



@NgModule({
  declarations: [
    CoffeSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoffeSearchComponent
  ]
})
export class CoffeSearchModule { }
