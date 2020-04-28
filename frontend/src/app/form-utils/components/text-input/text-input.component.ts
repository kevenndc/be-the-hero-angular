import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
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
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  @Input() type: string;
  @Input() placeholder: string;
  @Input() fc: FormControl;

  private value: string;
  private propagateChange: Function;

  constructor() { }

  ngOnInit(): void {
    //if (this.formControl) throw Error('Informe o FormControlName para o campo.');
  }

  writeValue(value: any) {

    this.value = value;
  }

  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
