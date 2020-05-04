import { 
  Component, 
  OnInit, 
  forwardRef, 
  Input } from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SubmitButtonComponent),
    multi: true
  }]
})
export class SubmitButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() text: string;


}
