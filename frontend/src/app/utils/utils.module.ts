import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//modulos
import { FeatherModule } from 'angular-feather';

//componentes
import { TextInputComponent } from './form/text-input/text-input.component';
import { TextAreaComponent } from './form/text-area/text-area.component';
import { SubmitButtonComponent } from './form/submit-button/submit-button.component';


const COMPONENTS = [
  TextInputComponent,
  TextAreaComponent,
  SubmitButtonComponent,
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: COMPONENTS,
})
export class UtilsModule { }
