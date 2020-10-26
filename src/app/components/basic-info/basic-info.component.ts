import { Component, Input, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { element } from 'protractor';
import { Observable, of, Subject } from 'rxjs';
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
  }

  add(): void {

  }

  userInput(key: IonInput) {
    if (this.basicInfo == undefined) {
      this.basicInfo = Object.create(null);
    }
    
    key.getInputElement().then(element => {
      switch (element.name.toUpperCase()) {
        case BasicInfoEnum.FIRSTNAME:
          this.basicInfo.firstName = element.value;
          break;
        case BasicInfoEnum.MIDDLENAME:
          this.basicInfo.middleName = element.value;
          break;
        case BasicInfoEnum.LASTNAME:
          this.basicInfo.lastName = element.value;
          break;
        case BasicInfoEnum.NICKNAME:
          this.basicInfo.nickName = element.value;
          break;
        case BasicInfoEnum.NATIONALITY:
          this.basicInfo.nationality = element.value;
          break;
        case BasicInfoEnum.NATION:
          this.basicInfo.nation = element.value;
          break;
        case BasicInfoEnum.RELIGION:
          this.basicInfo.religion = element.value;
          break;
        case BasicInfoEnum.RELATIONSHIPSTATUS:
          this.basicInfo.relationshipStatus = element.value;
          break;
        case BasicInfoEnum.HOMETOWN:
          this.basicInfo.homeTown = element.value;
          break;
        case BasicInfoEnum.DAYOFBIRTH:
          this.basicInfo.dayOfBirth = +element.value;
          break;
        case BasicInfoEnum.MONTHOFBIRTH:
          this.basicInfo.monthOfBirth = +element.value;
          break;
        case BasicInfoEnum.YEAROFBIRTH:
          this.basicInfo.yearOfBirth = +element.value;
          break;
      }
    });
  }
}
