/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TranslatorComponent } from './translator.component';

describe('TranslatorComponent', () => {
  let component: TranslatorComponent;
  let fixture: ComponentFixture<TranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
