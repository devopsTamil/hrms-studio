import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dependent-info',
  templateUrl: './dependent-info.component.html',
  styleUrls: ['./dependent-info.component.scss']
})
export class DependentInfoComponent implements OnInit {

  dependentForm = new UntypedFormGroup({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.dependentForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.dependentForm.get('userArray'));
  }

  addUser() {
    if (this.dependentForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.dependentForm.value);
  }
  getUserForm() {
    return this.fb.group({
      dependent: new UntypedFormControl('', [
        Validators.required
      ]),
      name: new UntypedFormControl('', [
        Validators.required
      ]),
      dob: new UntypedFormControl('', [
        Validators.required
      ]),
      gender: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }
}
