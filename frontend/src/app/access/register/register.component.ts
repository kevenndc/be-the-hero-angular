import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

//servicos
import { AccessService } from '../access.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private accessService: AccessService, 
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      whatsapp: [null],
      city: [null],
      uf: [null]
    });

  }

  handleRegister() {
    //e.preventDefault();
    
    this.accessService.registerONG(this.form.value)
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
