import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoffeOptions } from 'src/app/models/coffe-options';

@Component({
  selector: 'app-coffe-search',
  templateUrl: './coffe-search.component.html',
  styleUrls: ['./coffe-search.component.css']
})
export class CoffeSearchComponent {

  constructor(public formBuilder:FormBuilder) { }

  coffeOptions:CoffeOptions = new CoffeOptions();

  coffeForm = this.formBuilder.group({
    aroma: ['', [Validators.required]],
    flavor: ['', [Validators.required]],
    acidity: ['', [Validators.required]],
    body: ['', [Validators.required]],
  })

}
