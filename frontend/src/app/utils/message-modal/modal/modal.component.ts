import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public message: string;

  constructor(public bsModalRef: BsModalRef) { 
    setTheme('bs4');
  }
  ngOnInit(): void {
  }

}
