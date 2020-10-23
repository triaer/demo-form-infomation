import { Component, OnInit } from '@angular/core';
import { AdvanceInfoModel } from '../../models/advance-info-model';
import { PersonalInfomationService } from '../../services/personal-infomation.service';
@Component({
  selector: 'app-advance-info',
  templateUrl: './advance-info.component.html',
  styleUrls: ['./advance-info.component.scss'],
})
export class AdvanceInfoComponent implements OnInit {
  private advanceInfos: AdvanceInfoModel[];

  constructor(private personalInfoService: PersonalInfomationService) { }

  ngOnInit() { }

  add(expireIdentityCardDate: string, expireIdentityDate: string, identityCardDate: string,
    identityCardNumber: string, identityCardIssueBy: string, identityDate: string, identityNumber: string,
    taxNumber: string, registrationDate: string, registrationPlace: string, passportNumber: string, 
    passportDate: string, expiredPassportDate: string, visaIssuedBy: string, passportType: string,
    visaNumber: string, visaDate: string, expiredVisaDate: string, nation: string): void {
      
    let advanceInfo: AdvanceInfoModel;

    advanceInfo.expireIdentityCardDate = expireIdentityCardDate;
    advanceInfo.expireIdentityDate = expireIdentityDate;
    advanceInfo.identityCardDate = identityCardDate;
    advanceInfo.identityCardNumber = identityCardNumber;
    advanceInfo.identityCardIssueBy = identityCardIssueBy;
    advanceInfo.identityDate = identityDate;
    advanceInfo.identityNumber = identityNumber;
    advanceInfo.taxNumber = taxNumber;
    advanceInfo.registrationDate = registrationDate;
    advanceInfo.registrationPlace = registrationPlace;

    advanceInfo.passportNumber = passportNumber;
    advanceInfo.passportDate = passportDate;
    advanceInfo.expiredPassportDate = expiredPassportDate;
    advanceInfo.visaIssuedBy = visaIssuedBy;
    advanceInfo.passportType = passportType;

    advanceInfo.visaNumber = visaNumber;
    advanceInfo.visaDate = visaDate;
    advanceInfo.expiredVisaDate = expiredVisaDate;
    advanceInfo.nation = nation;

    this.personalInfoService.addAdvanceInfo(advanceInfo,)
      .subscribe(info => {
        this.advanceInfos.push(info);
      });
  }
}
