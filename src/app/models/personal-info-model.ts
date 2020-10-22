import { AddressInfoModel } from './address-info-model';
import { AdvanceInfoModel } from './advance-info-model';
import { BasicInfoModel } from './basic-info-model';

export interface PersonalInfoModel {
    id: number;

    basicInfo: BasicInfoModel;
    advanceInfo: AdvanceInfoModel;
    addressInfo: AddressInfoModel;
}
