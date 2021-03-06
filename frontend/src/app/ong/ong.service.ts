import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//terceiros
import { Observable } from 'rxjs';

//modelos
import { API_ROUTES } from 'src/app/app.contant';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  constructor(private http: HttpClient) { }

  getIncidents(ongId: string): Observable<any> {
    return this.http.get(API_ROUTES.profile, {
      headers: {
        Authorization: ongId
      }
    });
  }

  createIncident(incident: any): Observable<any> {
    return this.http.post(API_ROUTES.incidents, incident, {
      headers: {
        Authorization: incident.ongId
      }
    });
  }

  deleteIncient(incidentId: string, ongId: string): Observable<any> {
    return this.http.delete(`${API_ROUTES.incidents}/${incidentId}`, {
      headers: {
        Authorization: ongId
      }
    });
  }
}
