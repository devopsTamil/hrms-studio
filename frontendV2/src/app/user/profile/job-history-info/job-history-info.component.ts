import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';


@Component({
  selector: 'job-history-info',
  templateUrl: './job-history-info.component.html',
  styleUrls: ['./job-history-info.component.scss']
})
export class JobHistoryInfoComponent implements OnInit {

  jobHistoryForm = new UntypedFormGroup({});
  
  constructor(private fb:UntypedFormBuilder ) { }

  ngOnInit(): void {
    this.jobHistoryForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.jobHistoryForm.get('userArray'));
  }

  addUser() {
    if(this.jobHistoryForm.valid){
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.jobHistoryForm.value);
  }
  getUserForm() {
    return this.fb.group({
      position: new UntypedFormControl('', [
        Validators.required
      ]),
      company:new UntypedFormControl('', [
        Validators.required
      ]),
      address: new UntypedFormControl('', [
        Validators.required
      ]),
      years:new UntypedFormControl('', [
        Validators.required
      ]),
      period:new UntypedFormControl('', [
        Validators.required
      ]),
      ctc:new UntypedFormControl('', [
        Validators.required
      ]),
    });
  }
}
