import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoFormDisplayPage } from './info-form-display.page';

const routes: Routes = [
  {
    path: '',
    component: InfoFormDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoFormDisplayPageRoutingModule {}
