import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { AddressInfoEnum } from 'src/app/common/enum';
import { AddressInfoModel } from 'src/app/models/address-info-model';
import { PersonalInfomationService } from '../../services/personal-infomation.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  private addressInfo: AddressInfoModel;

  constructor(private personalInfoService: PersonalInfomationService) { }

  ngOnInit() { }

  userInput(key: IonInput) {
    if (this.addressInfo == undefined) {
      this.addressInfo = Object.create(null);
    }
    
    key.getInputElement().then(element => {
      switch (element.name.toUpperCase()) {
        case AddressInfoEnum.PERMANENTADDRESS:
          this.addressInfo.permanentAddress = element.value;
          break;
        case AddressInfoEnum.PERMANENTADDRESSNOTE:
          this.addressInfo.permanentAddressNote = element.value;
          break;
        case AddressInfoEnum.TEMPORARYADDRESS:
          this.addressInfo.temporaryAddress = element.value;
          break;
        case AddressInfoEnum.HOMEADDRESS:
          this.addressInfo.homeAddress = element.value;
          break;
        case AddressInfoEnum.TEMPORARYADDRESSNOTE:
          this.addressInfo.temporaryAddressNote = element.value;
          break;
      }
    });
  }
}
