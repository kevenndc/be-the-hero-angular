import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}) 
export class LoginService {

  private baseURL: string = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  getOngName(userId: string) {

    return this.http.post(`${this.baseURL}sessions`, { id: userId })
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage: string = '';
    
    if (error instanceof HttpErrorResponse) {
      errorMessage = `Nenhuma ONG encontrada com o ID informado. Verifique se o ID está correto e tente novamente.`;
    }

    return throwError(errorMessage);
  }

}
