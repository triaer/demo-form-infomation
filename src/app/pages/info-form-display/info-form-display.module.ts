import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFormDisplayPageRoutingModule } from './info-form-display-routing.module';

import { InfoFormDisplayPage } from './info-form-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFormDisplayPageRoutingModule
  ],
  declarations: [InfoFormDisplayPage]
})
export class InfoFormDisplayPageModule {}
