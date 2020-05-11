import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  message: string;
  isActive: boolean;

  mostraMensagem(mensagem: string) {
    alert(mensagem);
  }

  constructor() { }

  ngOnInit(): void {
  }

  showModal(message: string) {
    this.message = message;
    this.isActive = true;
  }

  handleClosing() {
    this.isActive = false;
  }

}

export const modalRef = new ModalComponent();