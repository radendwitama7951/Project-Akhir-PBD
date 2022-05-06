import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { PieChartPasanganKencanComponent } from './pie-chart-pasangan-kencan.component';

describe('PieChartPasanganKencanComponent', () => {
  let component: PieChartPasanganKencanComponent;
  let fixture: ComponentFixture<PieChartPasanganKencanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartPasanganKencanComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartPasanganKencanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
