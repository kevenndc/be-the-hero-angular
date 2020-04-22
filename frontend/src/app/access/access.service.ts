import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private baseURL: string = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  getOngName(userId: string): Observable<any> {

    return this.http.post(`${this.baseURL}sessions`, { id: userId })
      .pipe(
        catchError(this.handleError)
      )
  }

  registerONG(ongData: any): Observable<any> {
    return this.http.post(`${this.baseURL}ongs`, ongData)
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
