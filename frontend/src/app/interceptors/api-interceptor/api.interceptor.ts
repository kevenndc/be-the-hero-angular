import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

//terceiros
import { Observable } from 'rxjs';

//modelo
import { BASE_URL } from '../../app.contant';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({ url: `${BASE_URL}/${request.url}` }));
  }
}
