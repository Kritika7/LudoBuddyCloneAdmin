import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchcancellationComponent } from './matchcancellation.component';

describe('MatchcancellationComponent', () => {
  let component: MatchcancellationComponent;
  let fixture: ComponentFixture<MatchcancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchcancellationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchcancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
