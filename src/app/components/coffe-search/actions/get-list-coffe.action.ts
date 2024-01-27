import { Action } from "src/app/models/action";
import { CoffeSearchActions } from "./coffe-search.action";
import { Coffe } from "src/app/models/coffe";
import { delay, of } from "rxjs";
import { CoffeResult } from "src/app/models/coffe-result";

export class GetListCoffeAction extends Action {
    override readonly type = CoffeSearchActions.GET_LIST_COFFE;
    constructor(override payload: {coffe:Coffe}) {
        super(CoffeSearchActions.GET_LIST_COFFE);
    }
    override execute() {
      let result:CoffeResult = {
        cafes_especiais: [
          {
            nome: 'Café Especial 1',
          },
          {
            nome: 'Café Especial 2',
          },
          {
            nome: 'Café Especial 3',
          }
        ]
      }
      return of(result).pipe(delay(2500));
    }
}
