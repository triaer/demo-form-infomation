import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFormPageRoutingModule } from './info-form-routing.module';

import { InfoFormPage } from './info-form.page';

import { BasicInfoComponent } from '../../components/basic-info/basic-info.component'
import { AdvanceInfoComponent } from '../../components/advance-info/advance-info.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFormPageRoutingModule
  ],
  declarations: [
    InfoFormPage,
    BasicInfoComponent,
    AdvanceInfoComponent
  ]
})
export class InfoFormPageModule {}
