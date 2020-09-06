
import { environment } from './../../../environments/environment';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms'

export class User {
  Description: string;
  Name: string;
  Title: string;
  DepartmentID?: number;

  constructor(item?: User) {
    this.Description = item?.Description || '';
    this.Name = item?.Name || '';
    this.Title = item?.Title || '';
    this.DepartmentID = item?.DepartmentID || 0;
  }
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {


  @Input() model: any;
  path = environment.apiPath;
  list = [];
  form: FormGroup = new FormGroup({});
  @Output() formValid: EventEmitter<boolean> = new EventEmitter();
  constructor() {
    console.log(this.form);

  }

  ngOnInit() {
    this.form.statusChanges.subscribe(status => this.formValid.emit(status === 'VALID'));
    for (const value in this.model) {
      if (value !== 'DepartmentID')
        this.form.addControl(value, new FormControl(this.model[value], [Validators.required]))
      else
        this.form.addControl(value, new FormControl(this.model[value], [ValidateNumberBySelect]))
      this.list.push(value);
    }


  }

}

export function ValidateNumberBySelect(control: AbstractControl) {
  if (control.value === null || control.value === 0 || control.value === '') {
    return { validFname: true };
  }
  return null;
}