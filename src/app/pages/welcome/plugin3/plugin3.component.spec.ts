import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plugin3Component } from './plugin3.component';

describe('Plugin3Component', () => {
  let component: Plugin3Component;
  let fixture: ComponentFixture<Plugin3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plugin3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plugin3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
