import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellChipsComponent } from './sell-chips.component';

describe('SellChipsComponent', () => {
  let component: SellChipsComponent;
  let fixture: ComponentFixture<SellChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
