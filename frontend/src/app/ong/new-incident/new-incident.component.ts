import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//serviços
import { OngService } from '../ong.service';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  formIncident: FormGroup;
  submitted: boolean = false;

  private ongId: string;

  get f() { return this.formIncident.controls; }

  constructor(
    private ongService: OngService, 
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getOngInfo();
    this.initForm(); 
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.submitted = true;

    if(this.formIncident.invalid) return;
    

    this.ongService.createIncident(this.getRequestBody())
      .subscribe(
        response => {
          this.router.navigate(['profile']);
        },

        error => {
          alert(error);
          console.log(this.getRequestBody())
        }
      )
  }

  getOngInfo() {
    this.ongId = localStorage.getItem('ongId');
  }

  initForm() {
    this.formIncident = this.formBuilder.group({
      title: this.formBuilder.control(null, Validators.required),
      value: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(null, Validators.required),
    });
  }

  getRequestBody() {
    return {
      ...this.formIncident.value,
      ongId: this.ongId
    };
  }

}
