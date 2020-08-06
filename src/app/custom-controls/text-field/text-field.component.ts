import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent implements ControlValueAccessor {

  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  onChange: any = () => { }
  onTouch: any = () => { }
  

  // this method sets the value programmatically
  writeValue(value: any) {
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
}
