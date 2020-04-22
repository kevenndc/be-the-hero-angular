import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
  @Input() 
  incident: { 
    id: string,
    title: string,
    description: string,
    value: number,
  }

  @Output()
  delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteRequest() {
    this.delete.emit({ incidentId: this.incident.id });
  }

}
