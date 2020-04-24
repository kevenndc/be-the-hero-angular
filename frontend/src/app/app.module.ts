import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//modulos
import { AccessModule } from './access/access.module';
import { OngModule } from './ong/ong.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatherIconsModule } from './modules/feather-icons/feather-icons.module';

//componentes
import { AppComponent } from './app.component';

//interceptadores
import { APIInterceptor } from './interceptors/api.interceptor';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherIconsModule,
    HttpClientModule,
    AccessModule,
    OngModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
