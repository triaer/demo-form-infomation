import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoFormDisplayPage } from './info-form-display.page';

describe('InfoFormDisplayPage', () => {
  let component: InfoFormDisplayPage;
  let fixture: ComponentFixture<InfoFormDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFormDisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoFormDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
