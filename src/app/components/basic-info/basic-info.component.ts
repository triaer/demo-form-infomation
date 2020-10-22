import { Component, OnInit } from '@angular/core';
import { BasicInfoModel } from '../../models/basic-info-model';
import { PersonalInfomationService } from '../../services/personal-infomation.service';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  private basicInfos: BasicInfoModel[];
  constructor(private personalInfoService: PersonalInfomationService) { }

  ngOnInit() {
    // this.getBasicInfo();
  }

  // getBasicInfo(id: number): void {
  //   //this.personalInfoService.getPersonalInfos().subscribe(personalInfos => this.personalInfos = personalInfos)
  //   this.personalInfoService.getPersonalInfo()
  // }

  add(firstName: string, middleName = "", lastName: string, nickName = "", gender: string, nationality: string, nation: string,
  religion: string, relationshipStatus: string, homeTown: string, dateOfBirth: number, monthOfBirth: number, yearOfBirth: number): void {
    let basicInfo: BasicInfoModel;

    basicInfo.firstName = firstName;
    basicInfo.middleName = middleName;
    basicInfo.lastName = lastName;
    basicInfo.nickName = nickName;
    basicInfo.gender = gender;
    basicInfo.nationality = nationality;
    basicInfo.nation = nation;
    basicInfo.religion = religion;
    basicInfo.relationshipStatus = relationshipStatus;
    basicInfo.homeTown = homeTown;
    basicInfo.dayOfBirth = dateOfBirth;
    basicInfo.monthOfBirth = monthOfBirth;
    basicInfo.yearOfBirth = yearOfBirth;

    this.personalInfoService.addBasicInfo(basicInfo, )
      .subscribe(info => {
        this.basicInfos.push(info);
      });
  }
}
