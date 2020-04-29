import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: [null, Validators.required],
    });

  }

  //getter conveniente para retornar todos os campos do formulário
  get f() { return this.form.controls; }

  handleLogin(e) {
    e.preventDefault();
    this.submitted = true;

    if (this.form.invalid) 
       return this.showError('Por favor, preencha o campo com o ID da ONG.');

    this.idInputError.isActive = false;

    this.accessService.getOngName(this.form.value).subscribe(
      res => {
        this.ongName = res['name'];

        this.login();
      },
      
      error => {
        return this.showError(error);
      }
    ); 

  }

  private login() {
    localStorage.setItem('ongId', this.f.id.value);
    localStorage.setItem('ongName', this.ongName);

    this.router.navigate(['profile']);
  }

  private showError(message: string): void {
    this.idInputError.isActive = true;
    this.idInputError.message = message;
  }

  handleModalClose(e) {
    return this.idInputError.isActive = e.isActive;
  }

}
