import { Component, OnInit } from '@angular/core';
import { PersonalInfomationService } from 'src/app/services/personal-infomation.service';

@Component({
  selector: 'app-info-form-display',
  templateUrl: './info-form-display.page.html',
  styleUrls: ['./info-form-display.page.scss'],
})
export class InfoFormDisplayPage implements OnInit {

  constructor(private personalInfoService: PersonalInfomationService) { 
    personalInfoService.getPersonalInfoLocal();

    
  }

  ngOnInit() {
  }



}
