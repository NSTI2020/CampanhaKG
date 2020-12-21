/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FraternityEditComponent } from './fraternityEdit.component';

describe('FraternityEditComponent', () => {
  let component: FraternityEditComponent;
  let fixture: ComponentFixture<FraternityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraternityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraternityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
