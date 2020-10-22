import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFormPageRoutingModule } from './info-form-routing.module';

import { InfoFormPage } from './info-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFormPageRoutingModule
  ],
  declarations: [InfoFormPage]
})
export class InfoFormPageModule {}
