import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeSearchModule } from './components/coffe-search/coffe-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoffeSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
