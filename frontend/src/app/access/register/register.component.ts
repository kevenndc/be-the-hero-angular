import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

//servicos
import { AccessService } from '../access.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private accessService: AccessService, 
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      whatsapp: [null, Validators.required],
      city: [null, Validators.required],
      uf: [null, Validators.required]
    });

  }

  get f() { return this.form.controls; }

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
