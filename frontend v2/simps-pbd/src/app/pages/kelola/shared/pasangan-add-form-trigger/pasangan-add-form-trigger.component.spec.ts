import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasanganAddFormTriggerComponent } from './pasangan-add-form-trigger.component';

describe('PasanganAddFormTriggerComponent', () => {
  let component: PasanganAddFormTriggerComponent;
  let fixture: ComponentFixture<PasanganAddFormTriggerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasanganAddFormTriggerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasanganAddFormTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
