import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcomponentsComponent } from './sidenavcomponents.component';

describe('SidenavcomponentsComponent', () => {
  let component: SidenavcomponentsComponent;
  let fixture: ComponentFixture<SidenavcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavcomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
