import { HttpErrorResponse } from "@angular/common/http";
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
  call(action:Action) {
    this.stateManager.next({...this.state, loading: true})
    action.execute().subscribe({
      next: (result) => {
        this.stateManager.next({...this.state, loading: false, result})
      },
      error: (err:HttpErrorResponse) => {
        console.log(err);
        this.stateManager.next({...this.state, loading: false})
      }
    })
  }


}
