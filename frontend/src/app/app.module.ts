import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FeatherIconsModule } from './modules/feather-icons/feather-icons.module';
import { AppComponent } from './app.component';
import { AccessModule } from './access/access.module';
import { OngModule } from './ong/ong.module';


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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
