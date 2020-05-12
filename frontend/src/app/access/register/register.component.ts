import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//servicos
import { AccessService } from '../access.service';
import { MessageModalService } from 'src/app/utils/message-modal/message-modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

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
      name: this.formBuilder.control(null, Validators.required),
      email: this.formBuilder.control(null, [
        Validators.required, 
        Validators.email
      ]),
      whatsapp: this.formBuilder.control(null, Validators.required),
      city: this.formBuilder.control(null, Validators.required),
      uf: this.formBuilder.control(null, Validators.required)
    });

  }

  get f() { return this.form.controls; }

  handleRegister() {
    this.submitted = true;

    if (this.form.invalid) return this.modalService.showInvalidFormMessage();
    
    this.accessService.registerONG(this.form.value)
      .subscribe(
        response => {
          this.modalService.showMessage(`O ID da ONG é: ${response['id']}`);

          this.router.navigate(['']);
        }
      );
  }

}
