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
    key.getInputElement().then(element => {
      var value = element.value.trim();
      switch (element.name.toUpperCase()) {
        case AddressInfoEnum.PERMANENTADDRESS:
          this.addressInfo.permanentAddress = value;
          console.log(this.addressInfo.permanentAddress)
          break;
        case AddressInfoEnum.PERMANENTADDRESSNOTE:
          this.addressInfo.permanentAddressNote = value;
          break;
        case AddressInfoEnum.TEMPORARYADDRESS:
          this.addressInfo.temporaryAddress = value;
          break;
        case AddressInfoEnum.HOMEADDRESS:
          this.addressInfo.homeAddress = value;
          break;
        case AddressInfoEnum.TEMPORARYADDRESSNOTE:
          this.addressInfo.temporaryAddressNote = value;
          break;
      }
    });
    
    this.personalInfoService.setAddressInfo(this.addressInfo);
  }
}
