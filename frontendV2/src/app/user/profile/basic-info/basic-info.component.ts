import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BasicInfo } from 'app/user/shared/table.model';
import { GuardianType } from 'app/user/shared/user-profile.model';
import { UserProfileService } from 'app/user/shared/user-profile.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';


@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  submitted: boolean;
  basicInfo: BasicInfo = new BasicInfo();
  guardianTypes: (string | GuardianType)[];
  GuardianType: GuardianType;

  basicForm: UntypedFormGroup;


  // basicInfoFormGroup: FormGroup;
  aadhaarFile: File;
  PANFile: File;
  PassportFile: File;


  constructor(private userProfileService: UserProfileService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.guardianTypes = Object.values(GuardianType).filter(value => typeof value === 'string');

    this.basicForm = new UntypedFormGroup({
      profilePictureFile: new UntypedFormControl('', [Validators.required
      ]),
      firstName: new UntypedFormControl('', [
        Validators.required
      ]),
      middleName: new UntypedFormControl(''),
      lastName: new UntypedFormControl('', [
        Validators.required
      ]),
      dob: new UntypedFormControl('', [
        Validators.required
      ]),
      aadhaarName: new UntypedFormControl('', [
        Validators.required
      ]),
      aadhaarNumber: new UntypedFormControl('', [
        Validators.required
      ]),
      aadhaarFile: new UntypedFormControl('', [
        Validators.required
      ]),
      panNumber: new UntypedFormControl('', [
        Validators.required
      ]),
      panFile: new UntypedFormControl('', [
        Validators.required
      ]),
      nationality: new UntypedFormControl(''),
      passportNumber: new UntypedFormControl(''),
      validVisaInformation: new UntypedFormControl(''),
      panFileUrl: new UntypedFormControl(''),
      aadhaarFileUrl: new UntypedFormControl(''),
      guardianType: new UntypedFormControl('', [
        Validators.required
      ]),
      guardianName: new UntypedFormControl('', [
        Validators.required
      ]),
    })

    //basicinfo read as input from component
    this.basicForm.patchValue(this.basicInfo);
  }

  onSelectAadhaarFile(event: Event): void {
    this.aadhaarFile = this.getInputFile(event);
  }

  onSelectPANFile(event: Event): void {
    this.PANFile = this.getInputFile(event);
  }

  onSelectPassportFile(event: Event) {
    this.PassportFile = this.getInputFile(event);
  }

  getInputFile(event: Event): File {
    const element = event.currentTarget /* event.target */ as HTMLInputElement;
    let file: File | null = element.files[0];
    return file;
  }

  submit(): boolean {
    this.userProfileService.saveUserBasicInfo(this.basicInfo);
    this.submitted = true;
    if (!this.basicForm.valid) {
      // alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.basicForm.value)
    }
  }


  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://www.w3schools.com/howto/img_avatar.png';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
        this.basicForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }

      this.cd.markForCheck();
    }
  }


  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.basicForm.patchValue({
      profilePictureFile: new UntypedFormControl('', [Validators.required])
    });
  }


  //   this.basicForm = new UntypedFormGroup({
  //     profilePictureFile : new UntypedFormControl('', [Validators.required
  //     ]),
  //     firstName: new UntypedFormControl('', [
  //       Validators.required
  //     ]),
  //     middleName: new UntypedFormControl(''),
  //     lastName: new UntypedFormControl('', [
  //       Validators.required
  //     ]),
  //     dob: new UntypedFormControl('',[
  //       Validators.required
  //     ]),
  //     aadhaarName: new UntypedFormControl(''),
  //     aadhaarNumber: new UntypedFormControl(''),
  //     aadhaarFile: new UntypedFormControl(''),
  //     panNumber: new UntypedFormControl(''),
  //     panFile: new UntypedFormControl(''),
  //     nationality: new UntypedFormControl(''),
  //     passportNumber: new UntypedFormControl(''),
  //     validVisaInformation: new UntypedFormControl(''),
  //     panFileUrl: new UntypedFormControl(''),
  //     aadhaarFileUrl: new UntypedFormControl(''),
  //     guardianType: new UntypedFormControl('',[
  //       Validators.required
  //     ]),
  //     guardianName: new UntypedFormControl('',[
  //       Validators.required
  //     ]),
  //   })
  // }

}
