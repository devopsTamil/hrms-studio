import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BankInfo } from 'app/user/shared/table.model';

@Component({
  selector: 'bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
  bankForm: UntypedFormGroup;
  bankInfo: BankInfo = new BankInfo();
  constructor() { }

  ngOnInit(): void {
    this.bankForm = new UntypedFormGroup({
      bankName: new UntypedFormControl('', [Validators.required
      ]),
      accountNumber: new UntypedFormControl('', [
        Validators.required
      ]),
      ifscCode: new UntypedFormControl('', [
        Validators.required
      ]),
      nameInBank: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }

}
