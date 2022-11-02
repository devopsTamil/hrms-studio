import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nominee-info',
  templateUrl: './nominee-info.component.html',
  styleUrls: ['./nominee-info.component.scss']
})
export class NomineeInfoComponent implements OnInit {

  nomineeForm = new UntypedFormGroup({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.nomineeForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.nomineeForm.get('userArray'));
  }

  addUser() {
    if (this.nomineeForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.nomineeForm.value);
  }
  getUserForm() {
    return this.fb.group({
      relationship: new UntypedFormControl('', [
        Validators.required
      ]),
      nomineeName: new UntypedFormControl('', [
        Validators.required
      ]),
      dob: new UntypedFormControl('', [
        Validators.required
      ]),
      gender: new UntypedFormControl('', [
        Validators.required
      ]),
      nomineeShare: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }
}
