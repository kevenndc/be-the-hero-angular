import { Injectable } from '@angular/core';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class MessageModalService {

  public bsModalRef: BsModalRef;
  private modalConfig: ModalOptions;

  constructor(
    private bsModalService: BsModalService,
  ) { 
    
    this.modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: "static",
    }
  }

  showMessage(message: string): void {
    this.modalConfig.initialState = { message: message }
    this.bsModalRef = this.bsModalService.show(ModalComponent, this.modalConfig)
  }

  showInvalidFormMessage(): void {
    let message: string = 'Um ou mais campos do formulários não foram preenchidos.'
    this.modalConfig.initialState = { message: message }
    this.bsModalRef = this.bsModalService.show(ModalComponent, this.modalConfig)
  }

}
