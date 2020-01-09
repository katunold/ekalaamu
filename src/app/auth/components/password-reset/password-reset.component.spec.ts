import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedImports } from '../../../utils/test/shared-imports';
import { PasswordResetComponent } from './password-reset.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PasswordResetComponent', () => {
  let component: PasswordResetComponent;
  let fixture: ComponentFixture<PasswordResetComponent>;
  const sharedImports = new SharedImports();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...sharedImports.getSharedImports()],
      declarations: [ PasswordResetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
