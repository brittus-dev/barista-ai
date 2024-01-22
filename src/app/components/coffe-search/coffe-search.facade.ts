import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { Action } from "src/app/models/action";
import { CoffeResult } from "src/app/models/coffe-result";

class CoffeSearchState {
  loading:boolean = false;
  result?:CoffeResult;
}

@Injectable({
  providedIn: 'root'
})
export class CoffeSearchFacade {
  constructor() { }

  private state = new CoffeSearchState();
  private stateManager = new BehaviorSubject<CoffeSearchState>(this.state);

  //Selectors
  loading$ = this.stateManager.asObservable().pipe(
    map(state => state.loading)
  );

  result$ = this.stateManager.asObservable().pipe(
    map(state => state.result)
  );

  //Actions
  call(action:Action) {}


}
