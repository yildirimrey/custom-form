import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css']
})
export class SelectFieldComponent implements ControlValueAccessor, OnInit {

  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
      this.ngControl.valueChanges.subscribe(value => this.ngModelChange.emit(value))
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
    this.onTouch = fn;
  }
}
