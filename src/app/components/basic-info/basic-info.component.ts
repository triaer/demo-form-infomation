import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BasicInfoModel } from '../../models/basic-info-model';
import { PersonalInfomationService } from '../../services/personal-infomation.service';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  
  private basicInfos: BasicInfoModel[];

  @Input() private firstName: string;
  @Input() private middleName: string;
  @Input() private lastName: string;
  @Input() private nickName: string;
  @Input() private gender: string;
  @Input() private nationality: string;
  @Input() private nation: string;
  @Input() private religion: string;
  @Input() private relationshipStatu: string;
  @Input() private homeTown: string;
  @Input() private dayOfBirth: string;
  @Input() private monthOfBirth: string;
  @Input() private yearOfBirth: string;

  private userInput = new Subject<string>();

  constructor(private personalInfoService: PersonalInfomationService) { }

  ngOnInit() { }

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
    

    this.personalInfoService.addBasicInfo(basicInfo,)
      .subscribe(info => {
        this.basicInfos.push(info);
      });
  }

  input(data: string) {
    console.log(this.userInput.next(data));
  }

  ionBlur(data: string): void {
    
  }

  ionChange(data: string): void {
    console.log(this.firstName);
  }
}
