import { Injectable } from '@angular/core';

import { modalRef } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class MessageModalService {

  constructor() { }

  showMessage(mensagem: string) {
    modalRef.showModal(mensagem);
  }

}
