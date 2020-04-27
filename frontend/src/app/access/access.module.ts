import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import { AccessRoutingModule } from './access-routing.module';
import { FeatherIconsModule } from '../modules/feather-icons/feather-icons.module';

//componentes
import { LoginComponent } from './login/login.component';
import { ErrorModalComponent } from './login/error-modal/error-modal.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ErrorModalComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatherIconsModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
