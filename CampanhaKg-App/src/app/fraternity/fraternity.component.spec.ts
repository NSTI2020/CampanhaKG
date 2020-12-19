/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FraternityComponent } from './fraternity.component';

describe('FraternityComponent', () => {
  let component: FraternityComponent;
  let fixture: ComponentFixture<FraternityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraternityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraternityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
