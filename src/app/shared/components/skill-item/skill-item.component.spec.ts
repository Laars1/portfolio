/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkillItemComponent } from './skill-item.component';

describe('SkillItemComponent', () => {
  let component: SkillItemComponent;
  let fixture: ComponentFixture<SkillItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
