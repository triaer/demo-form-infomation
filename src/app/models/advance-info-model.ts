export interface AdvanceInfoModel {
    id: number;

    identityCardNumber: string;
    identityCardDate: string;
    expireIdentityCardDate: string;
    identityCardIssueBy: string;

    identityNumber: string;
    identityDate: string;
    expireIdentityDate: string;

    taxNumber: string;
    registrationDate: string;
    registrationPlace: string;

    passportNumber: string;
    passportDate: string;
    expiredPassportDate: string;
    visaIssuedBy: string;
    passportType: string;

    visaNumber: string;
    visaDate: string;
    expiredVisaDate: string;
    nation: string;
}
