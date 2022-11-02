import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reference-info',
  templateUrl: './reference-info.component.html',
  styleUrls: ['./reference-info.component.scss']
})
export class ReferenceInfoComponent implements OnInit {

  referenceForm = new UntypedFormGroup({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.referenceForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.referenceForm.get('userArray'));
  }

  addUser() {
    if (this.referenceForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.referenceForm.value);
  }
  getUserForm() {
    return this.fb.group({
      referenceName: new UntypedFormControl('', [
        Validators.required
      ]),
      mobileNumber: new UntypedFormControl('', [
        Validators.required
      ]),
      relationshipName: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }


}
