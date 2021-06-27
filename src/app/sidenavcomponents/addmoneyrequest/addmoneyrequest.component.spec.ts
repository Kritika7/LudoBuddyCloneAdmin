import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoneyrequestComponent } from './addmoneyrequest.component';

describe('AddmoneyrequestComponent', () => {
  let component: AddmoneyrequestComponent;
  let fixture: ComponentFixture<AddmoneyrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoneyrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoneyrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
