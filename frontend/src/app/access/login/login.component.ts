import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { 
  FormGroup, 
  FormBuilder, 
  Validators 
} from '@angular/forms';

//serviços
import { AccessService } from '../access.service';
import { MessageModalService } from 'src/app/utils/message-modal/message-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent implements OnInit {

  private ongName: string;

  idInputError = {
    isActive: false,
    message: ''
  }

  form: FormGroup;

  submitted: boolean = false;


  constructor(
    private accessService: AccessService, 
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: MessageModalService
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: this.formBuilder.control(null, Validators.required),
    });

  }

  //getter conveniente para retornar todos os campos do formulário
  get f() { return this.form.controls; }

  handleLogin(e): void {
    e.preventDefault();
    this.submitted = true;

    if (this.form.invalid) return this.modalService.showInvalidFormMessage();

    this.idInputError.isActive = false;

    this.accessService.getOngName(this.form.value).subscribe(
      res => {
        this.ongName = res['name'];

        this.login();
      }
    ); 

  }

  private login(): void {
    localStorage.setItem('ongId', this.f.id.value);
    localStorage.setItem('ongName', this.ongName);

    this.router.navigate(['profile']);
  }

}
