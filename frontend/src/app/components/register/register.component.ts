import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formFields = {
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    uf: ''
  }

  logo: string = '../../../assets/logo.svg';
  heroesImg: string = '../../../assets/heroes.png';

  constructor() { }

  ngOnInit(): void {
  }

  handleRegister() {
    console.log('teste');
  }

}
