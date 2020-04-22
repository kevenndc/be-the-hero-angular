import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  private baseURL: string = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  getIncidents(ongId: string): Observable<any> {
    return this.http.get(`${this.baseURL}profile`, {
      headers: {
        Authorization: ongId
      }
    });
  }

  createIncident(incident: any): Observable<any> {
    return this.http.post(`${this.baseURL}incidents`, incident , {
      headers: {
        Authorization: incident.ongId
      }
    })
    .pipe(
      catchError(error => throwError(error))
    );
  }

  deleteIncient(incidentId: string, ongId: string): Observable<any> {
    console.log(incidentId);
    return this.http.delete(`${this.baseURL}incidents/${incidentId}`, {
      headers: {
        Authorization: ongId
      }
    })
    .pipe(
      catchError(error => throwError(error))
    );
  }
}
