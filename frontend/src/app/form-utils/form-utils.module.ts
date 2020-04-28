import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//componentes
import { TextInputComponent } from './components/text-input/text-input.component';

const COMPONENTS = [
  TextInputComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: COMPONENTS
})
export class FormUtilsModule { }
