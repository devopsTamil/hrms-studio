import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DateOfJoiningInfo } from 'app/user/shared/table.model';

@Component({
  selector: 'date-of-joining-info',
  templateUrl: './date-of-joining-info.component.html',
  styleUrls: ['./date-of-joining-info.component.scss']
})
export class DateOfJoiningInfoComponent implements OnInit {

  dateOfJoiningForm: UntypedFormGroup;
  dojInfo: DateOfJoiningInfo = new DateOfJoiningInfo();
  constructor() { }

  ngOnInit(): void {
    this.dateOfJoiningForm = new UntypedFormGroup({
      doj: new UntypedFormControl('', [Validators.required
      ]),
      salary: new UntypedFormControl('', [
        Validators.required
      ]),
      location: new UntypedFormControl('', [
        Validators.required
      ]),
      project: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }

}
