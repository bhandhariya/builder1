import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plugin4Component } from './plugin4.component';

describe('Plugin4Component', () => {
  let component: Plugin4Component;
  let fixture: ComponentFixture<Plugin4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plugin4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plugin4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
