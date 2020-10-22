import { Component, OnInit } from '@angular/core';
import { AddressInfoModel } from 'src/app/models/address-info-model';
import { AdvanceInfoModel } from 'src/app/models/advance-info-model';
import { BasicInfoModel } from 'src/app/models/basic-info-model';
import { PersonalInfoModel } from '../../models/personal-info-model';
import { PersonalInfomationService } from '../../services/personal-infomation.service';

@Component({
  selector: 'app-personal-infos',
  templateUrl: './personal-infos.component.html',
  styleUrls: ['./personal-infos.component.scss'],
})
export class PersonalInfosComponent implements OnInit {
  personalInfos: PersonalInfoModel[];

  constructor(private personalInfoService: PersonalInfomationService) { }

  ngOnInit() {
    this.getPersonalInfos();
  }

  getPersonalInfos(): void {
    this.personalInfoService.getPersonalInfos().subscribe(personalInfos => this.personalInfos = personalInfos)
  }

  add(basicInfo: BasicInfoModel, advanceInfo: AdvanceInfoModel, addressInfo: AddressInfoModel): void {
    let newPersonalInfo: PersonalInfoModel;

    newPersonalInfo.basicInfo = basicInfo;
    newPersonalInfo.advanceInfo = advanceInfo;
    newPersonalInfo.addressInfo = addressInfo;

    this.personalInfoService.addPersonalInfo(newPersonalInfo , )
      .subscribe(personalInfo => {
        this.personalInfos.push(personalInfo);
      });
  }
}
