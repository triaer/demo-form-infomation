import { Component, OnInit } from '@angular/core';
import { AddressInfoModel } from 'src/app/models/address-info-model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  private addressInfo: AddressInfoModel[];

  constructor(private personalInfoService) { }

  ngOnInit() { }

  add(homeAddress: string, permanentAddress: string, permanentAddressNote = "",
    temporaryAddress: string, temporaryAddressNote = ""): void {
    let addressInfo: AddressInfoModel;

    addressInfo.homeAddress = homeAddress;
    addressInfo.permanentAddress = permanentAddress;
    addressInfo.permanentAddressNote = permanentAddressNote;
    addressInfo.temporaryAddress = temporaryAddress;
    addressInfo.temporaryAddressNote = temporaryAddressNote;

    this.personalInfoService.addAdvanceInfo(addressInfo,)
      .subscribe(info => {
        this.addressInfo.push(info);
      });
  }
}
