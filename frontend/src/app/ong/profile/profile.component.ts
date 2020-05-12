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

  handleLogout(e): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  handleDeleteIncident(e): void {

    this.ongService.deleteIncient(e.incidentId, this.ongId)
      .subscribe(
        response => {
          this.incidents = this.incidents.filter(incident => incident.id !== e.incidentId);
        }
      )
  }

  getOngInfo(): void {
    this.ongName = localStorage.getItem('ongName');
    this.ongId = localStorage.getItem('ongId');
  }

  getIncidents(): void {
    this.ongService.getIncidents(this.ongId)
      .subscribe(
        data => {
          this.incidents = data;
        }
      );
  }

}
