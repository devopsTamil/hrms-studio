import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CorrespondenceAddress, PermanentAddress } from 'app/user/shared/table.model';
import { UserProfileService } from 'app/user/shared/user-profile.service';

@Component({
  selector: 'communication-info',
  templateUrl: './communication-info.component.html',
  styleUrls: ['./communication-info.component.scss']
})
export class CommunicationInfoComponent implements OnInit {

  correspondenceInfo: CorrespondenceAddress = {
    userAddressId: "",
    homePhone: "",
    mobilePhone: "",
    email: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    pincode: ""
  };

  permanentInfo: PermanentAddress = {
    userAddressId: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    pincode: ""
  };

  correspondenceForm: UntypedFormGroup;

  disableSelect = new UntypedFormControl(false);

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.correspondenceForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email
      ]),
      mobilePhone: new UntypedFormControl('', [
        Validators.required
      ]),
      homePhone: new UntypedFormControl(''),
      street: new UntypedFormControl('', [
        Validators.required
      ]),
      apartment: new UntypedFormControl('', [
        Validators.required
      ]),
      city: new UntypedFormControl('', [
        Validators.required
      ]),
      state: new UntypedFormControl('', [
        Validators.required
      ]),
      pincode: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit(): void {
    this.userProfileService.saveUserCorrespondenceAddressInfo(this.correspondenceInfo);
    this.userProfileService.saveUserPermanentAddressInfo(this.permanentInfo);
  }
}
