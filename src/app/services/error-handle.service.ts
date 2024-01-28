import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

const horizontalPosition: MatSnackBarHorizontalPosition = 'start'
const verticalPosition: MatSnackBarVerticalPosition = 'top'


@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {
  constructor(private _snackBar: MatSnackBar) { }

  handle(message:string, error?:HttpErrorResponse) {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition,
      verticalPosition
    });
  }
}
