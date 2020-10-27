import { Component, OnInit } from '@angular/core';
import { BasicInfoModel } from 'src/app/models/basic-info-model';
import { AdvanceInfoModel } from 'src/app/models/advance-info-model';
import { AddressInfoModel } from 'src/app/models/address-info-model';
import { PersonalInfoModel } from 'src/app/models/personal-info-model';
import { PersonalInfomationService } from 'src/app/services/personal-infomation.service';

@Component({
  selector: 'app-info-form-display',
  templateUrl: './info-form-display.page.html',
  styleUrls: ['./info-form-display.page.scss'],
})
export class InfoFormDisplayPage implements OnInit {
  private personalInfo: PersonalInfoModel;
  private basicInfo: BasicInfoModel;
  private address: AddressInfoModel;
  private adva: AdvanceInfoModel;

  

  constructor(private personalInfoService: PersonalInfomationService) { 
  }

  ngOnInit() {
    // this.personalInfo = this.personalInfoService.getPersonalInfoLocal();
    // this.personalInfo.addressInfo.permanentAddress;
    // console.log(this.personalInfo)
  }



}
