import { 
  Component, 
  OnInit, 
  Input, 
  forwardRef, 
  ViewEncapsulation 
} from '@angular/core';

import { 
  ControlValueAccessor, 
  NG_VALUE_ACCESSOR, 
  FormControl, 
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ],
  
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  @Input() type: string;
  @Input() placeholder: string;
  @Input() fc: FormControl;
  @Input() isInvalid: boolean;

  private value: string;
  private propagateChange: Function;

  constructor() { }

  ngOnInit(): void {
    //if (this.formControl) throw Error('Informe o FormControlName para o campo.');
  }

  writeValue(value: any): void {

    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

}
