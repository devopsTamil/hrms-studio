import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spouse-info',
  templateUrl: './spouse-info.component.html',
  styleUrls: ['./spouse-info.component.scss']
})
export class SpouseInfoComponent implements OnInit {
  spouseForm: UntypedFormGroup;

  constructor() { }

  ngOnInit(): void {
    this.spouseForm = new UntypedFormGroup({
      maritialStatus: new UntypedFormControl(''),
      spouseName: new UntypedFormControl(''),
      spouseEmployer: new UntypedFormControl(''),
      spousePhone: new UntypedFormControl('')
    });
  }

}
