import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytmmgtComponent } from './paytmmgt.component';

describe('PaytmmgtComponent', () => {
  let component: PaytmmgtComponent;
  let fixture: ComponentFixture<PaytmmgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaytmmgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytmmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
