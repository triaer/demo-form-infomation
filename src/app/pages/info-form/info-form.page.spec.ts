import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoFormPage } from './info-form.page';

describe('InfoFormPage', () => {
  let component: InfoFormPage;
  let fixture: ComponentFixture<InfoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
