import { Component, OnInit, Type } from '@angular/core';
import { IonInput, IonItemOptions, IonSelect, IonSelectOption } from '@ionic/angular';
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
    if(key instanceof IonInput) {
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
          case BasicInfoEnum.NATIONALITY:
            this.basicInfo.nationality = value;
            break;
          case BasicInfoEnum.NATION:
            this.basicInfo.nation = value;
            break;
          case BasicInfoEnum.RELIGION:
            this.basicInfo.religion = value;
            break;
          case BasicInfoEnum.RELATIONSHIPSTATUS:
            this.basicInfo.relationshipStatus = value;
            break;
          case BasicInfoEnum.HOMETOWN:
            this.basicInfo.homeTown = value;
            break;
          case BasicInfoEnum.DAYOFBIRTH:
            this.basicInfo.dayOfBirth = +value;
            break;
          case BasicInfoEnum.MONTHOFBIRTH:
            this.basicInfo.monthOfBirth = +value;
            break;
          case BasicInfoEnum.YEAROFBIRTH:
            this.basicInfo.yearOfBirth = +value;
            break;
        }
      });
    }
    else if (key instanceof IonSelect) {
      switch (key.name.toUpperCase()) {
        case BasicInfoEnum.GENDER:
          this.basicInfo.gender = key.value;
          break;
      }
    }

    this.personalInfoService.setBasicInfo(this.basicInfo);
  }
}
