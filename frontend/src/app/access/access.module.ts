import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import { AccessRoutingModule } from './access-routing.module';
import { FeatherIconsModule } from '../modules/feather-icons/feather-icons.module';

//componentes
import { LoginComponent } from './login/login.component';
import { ErrorModalComponent } from './login/error-modal/error-modal.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormUtilsModule } from '../form-utils/form-utils.module';



@NgModule({
  declarations: [
    LoginComponent,
    ErrorModalComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FeatherIconsModule,
    AccessRoutingModule,
    FormUtilsModule
  ]
})
export class AccessModule { }
