import { Component, OnInit } from '@angular/core';
import { IonDatetime, IonInput, IonItemOptions, IonSelect, IonSelectOption } from '@ionic/angular';
import { AdvanceInfoEnum } from 'src/app/common/enum';
import { AdvanceInfoModel } from '../../models/advance-info-model';
import { PersonalInfomationService } from '../../services/personal-infomation.service';
@Component({
  selector: 'app-advance-info',
  templateUrl: './advance-info.component.html',
  styleUrls: ['./advance-info.component.scss'],
})
export class AdvanceInfoComponent implements OnInit {
  private advanceInfo: AdvanceInfoModel;

  constructor(private personalInfoService: PersonalInfomationService) { }

  ngOnInit() {
    this.advanceInfo = this.personalInfoService.initiateAdvanceInfo();
  }

  displayFutureYear(key: IonDatetime) {
    var currentTime = new Date();

    var currentYear = currentTime.getFullYear();
    var currentDate = String(currentTime.getDate()).padStart(2, '0');
    var currentMonth = String(currentTime.getMonth()).padStart(2, '0');
    var futureYear = currentYear + 100;

    var futureTime = futureYear + "-" + currentMonth + "-" + currentDate;
    key.max = futureTime;
  }

  userInput(key: any) {
    if (key instanceof IonInput) {
      key.getInputElement().then(element => {
        var value = element.value.trim();
        switch (element.name.toUpperCase()) {
          case AdvanceInfoEnum.IDENTITYCARDISSUEBY:
            this.advanceInfo.identityCardIssueBy = value;
            break;
          case AdvanceInfoEnum.NATION:
            this.advanceInfo.nation = value;
            break;
          case AdvanceInfoEnum.IDENTITYCARDNUMBER:
            this.advanceInfo.identityCardNumber = value;
            break;
          case AdvanceInfoEnum.PASSPORTNUMBER:
            this.advanceInfo.passportNumber = value;
            break;
          case AdvanceInfoEnum.PASSPORTTYPE:
            this.advanceInfo.passportType = value;
            break;
          case AdvanceInfoEnum.REGISTRATIONPLACE:
            this.advanceInfo.registrationPlace = value;
            break;
          case AdvanceInfoEnum.TAXNUMBER:
            this.advanceInfo.taxNumber = value;
            break;
          case AdvanceInfoEnum.VISANUMBER:
            this.advanceInfo.visaNumber = value;
            break;
        }
      });
    }
    else if (key instanceof IonDatetime) {
      var dateTime = new Date(key.value);
      var value = dateTime.getDate() + "/" + Number(dateTime.getMonth() + 1) + "/" + dateTime.getFullYear();

      switch (key.name.toUpperCase()) {
        case AdvanceInfoEnum.IDENTITYDATE:
          this.advanceInfo.identityDate = value;
          break;
        case AdvanceInfoEnum.EXPIREDPASSPORTDATE:
          this.advanceInfo.expiredPassportDate = value;
          break;
        case AdvanceInfoEnum.EXPIREIDENTITYCARDDATE:
          this.advanceInfo.expireIdentityCardDate = value;
          break;
        case AdvanceInfoEnum.EXPIREIDENTITYDATE:
          this.advanceInfo.expireIdentityDate = value;
          break;
        case AdvanceInfoEnum.EXPIREDVISADATE:
          this.advanceInfo.expiredVisaDate = value;
          break;
        case AdvanceInfoEnum.IDENTITYCARDDATE:
          this.advanceInfo.identityCardDate = value;
          break;
        case AdvanceInfoEnum.VISADATE:
          this.advanceInfo.visaDate = value;
          break;
        case AdvanceInfoEnum.VISAISSUEDBY:
          this.advanceInfo.visaIssuedBy = value;
          break;
        case AdvanceInfoEnum.REGISTRATIONDATE:
          this.advanceInfo.registrationDate = value;
          break;
        case AdvanceInfoEnum.PASSPORTDATE:
          this.advanceInfo.passportDate = value;
          break;
      }
    }
    
    this.personalInfoService.setAdvanceInfo(this.advanceInfo);
  }
}
