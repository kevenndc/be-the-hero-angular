import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import { AccessRoutingModule } from './access-routing.module';
import { FeatherIconsModule } from '../modules/feather-icons/feather-icons.module';

//componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FeatherIconsModule,
    AccessRoutingModule,
    UtilsModule,
  ]
})
export class AccessModule { }
