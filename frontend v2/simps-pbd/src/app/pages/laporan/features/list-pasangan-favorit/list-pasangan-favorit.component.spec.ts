import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPasanganFavoritComponent } from './list-pasangan-favorit.component';

describe('ListPasanganFavoritComponent', () => {
  let component: ListPasanganFavoritComponent;
  let fixture: ComponentFixture<ListPasanganFavoritComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPasanganFavoritComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPasanganFavoritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
