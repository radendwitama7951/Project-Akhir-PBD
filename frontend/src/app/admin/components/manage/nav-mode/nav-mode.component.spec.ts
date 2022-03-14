import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavModeComponent } from './nav-mode.component';

describe('NavModeComponent', () => {
  let component: NavModeComponent;
  let fixture: ComponentFixture<NavModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
