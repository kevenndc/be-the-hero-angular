import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './login/login.component';
import { ErrorModalComponent } from './login/error-modal/error-modal.component';
import { RegisterComponent } from './register/register.component';
import { FeatherIconsModule } from '../modules/feather-icons/feather-icons.module';


@NgModule({
  declarations: [
    LoginComponent,
    ErrorModalComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FeatherIconsModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
