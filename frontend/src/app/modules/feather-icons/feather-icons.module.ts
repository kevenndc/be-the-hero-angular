import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { LogIn, ArrowLeft, X, Power, Trash2 } from 'angular-feather/icons';

//Seleciona os icones que serão usados
const icons = {
  LogIn,
  ArrowLeft,
  X,
  Power,
  Trash2
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
