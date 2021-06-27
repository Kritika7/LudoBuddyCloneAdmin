import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchreleaseComponent } from './matchrelease.component';

describe('MatchreleaseComponent', () => {
  let component: MatchreleaseComponent;
  let fixture: ComponentFixture<MatchreleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchreleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
