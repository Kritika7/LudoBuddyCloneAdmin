import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyChipsComponent } from './buy-chips.component';

describe('BuyChipsComponent', () => {
  let component: BuyChipsComponent;
  let fixture: ComponentFixture<BuyChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
