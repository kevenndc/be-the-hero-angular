import { Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {

  @Input('error') errorMessage: string;

  @Output('close') closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClosing() {
    this.closed.emit({ isActive: false });
  }

}
