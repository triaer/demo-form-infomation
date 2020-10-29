import { Component, OnInit } from '@angular/core';
import { IonDatetime, IonInput, IonSelect, IonTextarea } from '@ionic/angular';
import { BasicInfoEnum } from 'src/app/common/enum';
import { BasicInfoModel } from '../../models/basic-info-model';
import { PersonalInfomationService } from '../../services/personal-infomation.service';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {

  private basicInfo: BasicInfoModel;

  constructor(private personalInfoService: PersonalInfomationService) { }

  ngOnInit() {
    this.basicInfo = this.personalInfoService.initiateBasicInfo();
  }

  userInput(key: any) {
    if (key instanceof IonInput) {
      key.getInputElement().then(element => {
        var value = element.value.trim();
        switch (element.name.toUpperCase()) {
          case BasicInfoEnum.FIRSTNAME:
            this.basicInfo.firstName = value;
            break;
          case BasicInfoEnum.MIDDLENAME:
            this.basicInfo.middleName = value;
            break;
          case BasicInfoEnum.LASTNAME:
            this.basicInfo.lastName = value;
            break;
          case BasicInfoEnum.NICKNAME:
            this.basicInfo.nickName = value;
            break;
          case BasicInfoEnum.HOMETOWN:
            this.basicInfo.homeTown = value;
            break;
          case BasicInfoEnum.BIRTHPLACE:
            this.basicInfo.birthPlace = value;
            break;
          case BasicInfoEnum.NOTE:
            this.basicInfo.note = value;
            break;
        }
      });
    }
    else if (key instanceof IonSelect || key instanceof IonDatetime || key instanceof IonTextarea) {
      switch (key.name.toUpperCase()) {
        case BasicInfoEnum.GENDER:
          this.basicInfo.gender = key.value;
          break;
        case BasicInfoEnum.NATIONALITY:
          this.basicInfo.nationality = key.value;
          break;
        case BasicInfoEnum.NATION:
          this.basicInfo.nation = key.value;
          break;
        case BasicInfoEnum.RELATIONSHIPSTATUS:
          this.basicInfo.relationshipStatus = key.value;
          break;
        case BasicInfoEnum.DAYOFBIRTH:
          var dateTime = new Date(key.value);
          this.basicInfo.dayOfBirth = dateTime.getDate();
          break;
        case BasicInfoEnum.MONTHOFBIRTH:
          var dateTime = new Date(key.value);
          this.basicInfo.monthOfBirth = dateTime.getMonth() + 1;
          break;
        case BasicInfoEnum.YEAROFBIRTH:
          var dateTime = new Date(key.value);
          this.basicInfo.yearOfBirth = dateTime.getFullYear();
          break;
        case BasicInfoEnum.NOTE:
          this.basicInfo.note = key.value;
          break;
      }
    }

    this.personalInfoService.setBasicInfo(this.basicInfo);
  }
}
