import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AccessService } from '../access.service';

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

  constructor(private accessService: AccessService, private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister(e) {
    e.preventDefault();
    
    this.accessService.registerONG(this.formFields)
      .subscribe(
        response => {
          alert(`O ID da ONG é: ${response['id']}`);

          this.router.navigate(['']);
        },

        error => {
          alert(error);
        }
      )
  }

}
