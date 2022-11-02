import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'eductional-info',
  templateUrl: './eductional-info.component.html',
  styleUrls: ['./eductional-info.component.scss']
})
export class EductionalInfoComponent implements OnInit {

  educationalForm = new UntypedFormGroup({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.educationalForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.educationalForm.get('userArray'));
  }

  addUser() {
    if (this.educationalForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.educationalForm.value);
  }
  getUserForm() {
    return this.fb.group({
      university: new UntypedFormControl('', [
        Validators.required
      ]),
      yearCompleted: new UntypedFormControl('', [
        Validators.required
      ]),
      program: new UntypedFormControl('', [
        Validators.required
      ]),
      aggregate: new UntypedFormControl('', [
        Validators.required
      ]),
      grade: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }

}
