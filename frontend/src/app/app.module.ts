import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//modulos
import { AccessModule } from './access/access.module';
import { OngModule } from './ong/ong.module';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

//componentes
import { AppComponent } from './app.component';

//interceptadores
import { APIInterceptor } from './interceptors/api-interceptor/api.interceptor';
import { ErrorInterceptor } from './interceptors/error-interceptor/error.interceptor';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccessModule,
    OngModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ErrorInterceptor, multi: false }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { } 
