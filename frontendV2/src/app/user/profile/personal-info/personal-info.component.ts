import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';


@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personalForm = new UntypedFormGroup({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.personalForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.personalForm.get('userArray'));
  }

  addUser() {
    if (this.personalForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.personalForm.value);
  }
  getUserForm() {
    return this.fb.group({
      name: new UntypedFormControl('', [
        Validators.required
      ]),
      relationshipControl: new UntypedFormControl('', [
        Validators.required
      ]),
      dob: new UntypedFormControl('', [
        Validators.required
      ]),
    });
  }

}

