import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//componentes
import { TextInputComponent } from './components/text-input/text-input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

const COMPONENTS = [
  TextInputComponent,
  TextAreaComponent
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
