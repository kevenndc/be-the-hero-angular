import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//terceiros
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

//modelo
import { API_ROUTES } from 'src/app/app.contant';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http: HttpClient) { }

  getOngName(data: Object): Observable<any> {

    return this.http.post(API_ROUTES.sessions, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  registerONG(ongData: any): Observable<any> {
    return this.http.post(API_ROUTES.ongs, ongData)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  handleError(error) {
    let errorMessage: string = '';
    
    if (error instanceof HttpErrorResponse) {
      errorMessage = `Nenhuma ONG encontrada com o ID informado. Verifique se o ID está correto e tente novamente.`;
    }

    return throwError(errorMessage);
  }
}
