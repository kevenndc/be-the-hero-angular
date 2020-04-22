import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent implements OnInit {

  logo: string = '../../../assets/logo.svg';
  heroesImg: string = '../../../assets/heroes.png';
  ongID: string;
  private ongName: string;

  idInputError = {
    isActive: false,
    message: ''
  }


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(e) {
    e.preventDefault();

    if (!this.ongID) 
      return this.showError('Por favor, preencha o campo com o ID da ONG.');

    this.idInputError.isActive = false;

    this.loginService.getOngName(this.ongID).subscribe(
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
    localStorage.setItem('ongId', this.ongID);
    localStorage.setItem('ongName', this.ongName);

    this.router.navigate(['register']);
  }

  private showError(message: string): void {
    this.idInputError.isActive = true;
    this.idInputError.message = message;
  }

  handleModalClose(e) {
    return this.idInputError.isActive = e.isActive;
  }

}
