import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { LogIn, ArrowLeft, X } from 'angular-feather/icons';

//Seleciona os icones que serão usados
const icons = {
  LogIn,
  ArrowLeft,
  X
}

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconsModule { }
