import { 
  Component, 
  OnInit, 
  Input, 
  forwardRef
} from '@angular/core';

import { 
  FormControl, 
  NG_VALUE_ACCESSOR 
} from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextAreaComponent),
    multi: true
  }]
})
export class TextAreaComponent implements OnInit {

  @Input() placeholder: string;
  @Input() fc: FormControl;
  @Input() isInvalid: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
