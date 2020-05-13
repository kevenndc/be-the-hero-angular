import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//serviços
import { OngService } from '../ong.service';
import { MessageModalService } from 'src/app/utils/message-modal/message-modal.service';

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
    private formBuilder: FormBuilder,
    private modalService: MessageModalService
  ) { }

  ngOnInit(): void {
    this.getOngInfo();
    this.initForm(); 
  }

  handleSubmit(e): void {
    e.preventDefault();
    
    this.submitted = true;

    if(this.formIncident.invalid) {
      console.log(this.formIncident);
      return this.modalService.showInvalidFormMessage();
    
    }
    

    this.ongService.createIncident(this.getRequestBody())
      .subscribe(
        response => {
          this.router.navigate(['profile']);
        }
      )
  }

  getOngInfo(): void {
    this.ongId = localStorage.getItem('ongId');
  }

  initForm(): void {
    this.formIncident = this.formBuilder.group({
      title: this.formBuilder.control(null, Validators.required),
      value: this.formBuilder.control(null, [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      description: this.formBuilder.control(null, Validators.required),
    });
  }

  getRequestBody(): Object {
    return {
      ...this.formIncident.value,
      ongId: this.ongId
    };
  }

}
