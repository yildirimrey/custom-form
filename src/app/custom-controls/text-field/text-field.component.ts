import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent implements ControlValueAccessor, OnInit {

  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    this.ngControl.valueChanges.subscribe(value => this.ngModelChange.emit(value));
  }

  onChange: any = () => { }
  onTouch: any = () => { }


  // this method sets the value programmatically
  writeValue(value: any) {
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}
