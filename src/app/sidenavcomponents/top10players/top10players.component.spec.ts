import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10playersComponent } from './top10players.component';

describe('Top10playersComponent', () => {
  let component: Top10playersComponent;
  let fixture: ComponentFixture<Top10playersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10playersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10playersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
