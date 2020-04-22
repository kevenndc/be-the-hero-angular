import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngService } from '../ong.service';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  logo: string = '../../../assets/logo.svg';
  newIncident = {
    title: '',
    value: '',
    description: '',
    ongId: ''
  }

  constructor(private ongService: OngService, private router: Router) { }

  ngOnInit(): void {
    this.newIncident.ongId = localStorage.getItem('ongId');
  }

  handleSubmit(e) {
    e.preventDefault();

    this.ongService.createIncident(this.newIncident)
      .subscribe(
        response => {
          this.router.navigate(['profile']);
        },

        error => {
          alert(error);
        }
      )
  }

}
