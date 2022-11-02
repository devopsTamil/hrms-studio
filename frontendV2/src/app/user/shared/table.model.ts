export class BasicInfo {
    firstName: string;
    middleName: string;
    lastName: string;
    profilePictureFile : File;
    profilePictureUrl : string;
    dob: Date;
    aadhaarName: string;
    aadhaarFile: File;
    aadhaarNumber: string;
    aadhaarAttachmentUrl: string;
    panNumber: string;
    panFile: File;
    panAttachmentUrl: string;
    nationality: string;
    passportNumber: string;
    validVisaInformation : string;
    guardianType: string;
    guardianName: string;
}

export class CorrespondenceAddress{
    userAddressId: string;
    homePhone: string;
    mobilePhone: string;
    email: string;
    street: string;
    apartment: string;
    city: string;
    state: string;
    pincode: string;
}

export class PermanentAddress{
    userAddressId: string;
    street: string;
    apartment: string;
    city: string;
    state: string;
    pincode: string;
}

export class PersonalInfo {
    id: string;
    name: string;
    relationshipType: Selection;
    dob: Date;
}


export class ReferenceInfo {
    id: string;
    name: string;
    mobileNumber:string;
    relationshipType: Selection;
}

export class JobHistory {
    id: string;
    position: string;
    companyName: string;
    address: string;
    numberYears: string;
    period: string;
    ctc: string;
    isEdit: boolean;
}

export class Educational {
    id: string;
    university: string;
    completionYear: string;
    program: string;
    aggregate: string;
    grade: string;
    isEdit: boolean;
}

export class Nominee {
    id: string;
    relationship: string;
    nomineeName: string;
    dob: string;
    gender: string;
    nomineeShare: string;
    isEdit: boolean;
}

export class Dependent {
    id: string;
    dependentName: string;
    name: string;
    dob: string;
    gender: string;
    isEdit: boolean;
}

export class BankInfo {
    id: string;
    bankName: string;
    accountNumber: number;
    ifscCode: string;
    nameInBank:string;
}
export class DateOfJoiningInfo {
    id: string;
    doj: string;
    salary: number;
    location: string;
    project:string;
}

export class EmergencyContactInfo {
    id: string;
    physician: string;
    phoneNumber: number;
    bloodGroup: string;
    firstName: string;
    lastName: string;
    relationship: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    homePhone: number;
    workPhone: number;
    mobilePhone: number;
}

export const JobHistoryColumns = [
    {
        key: 'position',
        type: 'text',
        label: 'Position',
        required: true,
    },
    {
        key: 'companyName',
        type: 'text',
        label: 'Name of the Company',
        required: true,
    },
    {
        key: 'address',
        type: 'text',
        label: 'Address',
        required: true,
    },
    {
        key: 'numberYears',
        type: 'text',
        label: 'No. of years',
        required: true,
    },
    {
        key: 'period',
        type: 'text',
        label: 'Period',
        required: true,
    },
    {
        key: 'ctc',
        type: 'text',
        label: 'CTC',
        required: true,
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

export const EducationalColumns = [
    {
        key: 'university',
        type: 'text',
        label: 'University / College / Institution / School',
        required: true,
    },
    {
        key: 'completionYear',
        type: 'text',
        label: 'Year of Completion',
        required: true,
    },
    {
        key: 'program',
        type: 'text',
        label: 'Program',
        required: true,
    },
    {
        key: 'aggregate',
        type: 'text',
        label: 'Aggregate %',
    },
    {
        key: 'grade',
        type: 'text',
        label: 'Grade',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

export const NomineeColumns = [
    {
        key: 'relationship',
        type: 'text',
        label: 'Relationship',
        required: true,
    },
    {
        key: 'nomineeName',
        type: 'text',
        label: 'Nominee Name',
    },
    {
        key: 'dob',
        type: 'date',
        label: 'Date of Birth',
    },
    {
        key: 'gender',
        type: 'text',
        label: 'Gender',
    },
    {
        key: 'nomineeShare',
        type: 'text',
        label: 'Nominee Share %',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

export const DependentColumns = [
    {
        key: 'dependentName',
        type: 'text',
        label: 'Dependent',
        required: true,
    },
    {
        key: 'name',
        type: 'text',
        label: 'Name',
    },
    {
        key: 'dob',
        type: 'date',
        label: 'Date of Birth',
    },
    {
        key: 'gender',
        type: 'text',
        label: 'Gender',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];