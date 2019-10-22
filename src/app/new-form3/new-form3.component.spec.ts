import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForm3Component } from './new-form3.component';

describe('NewForm3Component', () => {
  let component: NewForm3Component;
  let fixture: ComponentFixture<NewForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
