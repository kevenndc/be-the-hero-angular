import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//modulos
import { FeatherModule } from 'angular-feather';

//componentes
import { TextInputComponent } from './form/text-input/text-input.component';
import { TextAreaComponent } from './form/text-area/text-area.component';
import { SubmitButtonComponent } from './form/submit-button/submit-button.component';
import { ModalComponent } from './message-modal/modal/modal.component';

//servicos
import { MessageModalService } from './message-modal/message-modal.service';


const COMPONENTS = [
  TextInputComponent,
  TextAreaComponent,
  SubmitButtonComponent,
  ModalComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: [ModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MessageModalService
  ]
})
export class UtilsModule { }
