import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngService } from '../ong.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ongName: string;
  ongId: string;
  incidents: any[] = [];

  constructor(private ongService: OngService, private router: Router) { }

  ngOnInit(): void {
    this.getOngInfo();
    this.getIncidents();
  }

  handleLogout(e) {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  handleDeleteIncident(e) {

    this.ongService.deleteIncient(e.incidentId, this.ongId)
      .subscribe(
        response => {
          this.incidents = this.incidents.filter(incident => incident.id !== e.incidentId);
        },

        error => {
          alert(error);
        }
      )
  }

  getOngInfo() {
    this.ongName = localStorage.getItem('ongName');
    this.ongId = localStorage.getItem('ongId');
  }

  getIncidents() {
    this.ongService.getIncidents(this.ongId)
      .subscribe(
        data => {
          this.incidents = data;
        },

        error => {
          alert(error);
        }
      );
  }

}
