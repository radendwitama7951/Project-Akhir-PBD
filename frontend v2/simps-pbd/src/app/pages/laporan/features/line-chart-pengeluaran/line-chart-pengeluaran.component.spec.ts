import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineChartPengeluaranComponent } from './line-chart-pengeluaran.component';

describe('LineChartPengeluaranComponent', () => {
  let component: LineChartPengeluaranComponent;
  let fixture: ComponentFixture<LineChartPengeluaranComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartPengeluaranComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineChartPengeluaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
