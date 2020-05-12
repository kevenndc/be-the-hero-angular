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
    return this.http.post(API_ROUTES.sessions, data);
  }

  registerONG(ongData: any): Observable<any> {
    return this.http.post(API_ROUTES.ongs, ongData);
  }
}
