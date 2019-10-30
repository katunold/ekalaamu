import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterService } from "../../../shared/services/toaster.service";
import { toasterServiceSpy, authServiceSpy, routerSpy } from '../../../helpers/tests/spies.spec';
import { SharedImports } from "../../../utils/test/shared-imports";
import { LoginComponent } from './login.component';
import { of, throwError } from "rxjs";
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { SocialAuthComponent } from '../social-auth/social-auth.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let formButton;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const sharedImports = new SharedImports();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...sharedImports.getSharedImports()],
      declarations: [LoginComponent],
      providers: [
        { provide: ToasterService, useValue: toasterServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('successful login redirects', () => {
    authServiceSpy.login.and.returnValue(of({ token: 'token' }));
    component.login();
    expect(toasterServiceSpy.onSuccess).toHaveBeenCalled();
  });
});

