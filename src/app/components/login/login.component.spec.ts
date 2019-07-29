import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterService } from "../../shared/services/toaster.service";
import {loginServiceSpy, toasterServiceSpy} from "../../utils/test/spies";
import { SharedImports } from "../../utils/test/shared-imports";
import { LoginComponent } from './login.component';
import {of, throwError} from "rxjs";
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {LoginService} from "./service/login.service";

fdescribe('LoginComponent', () => {
  let formButton;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const sharedImports = new SharedImports();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...sharedImports.getSharedImports()],
      declarations: [ LoginComponent ],
      providers: [
         { provide: ToasterService, useValue: toasterServiceSpy },
        { provide: LoginService, useValue: loginServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //
  // beforeEach(() => {
  //
  //   fixture.debugElement.query(By.css('button'))
  //   const [email, password] = fixture.debugElement.queryAll(By.css('login-container')).map(
  //     debugElement => debugElement.nativeElement,
  //   );
  //
  //   email.value = 'johndoe@mail.com';
  //   password.value = 'kabale';
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should login',() => {

    // spyOn(component,'login')

    loginServiceSpy.login.and.returnValue(of({}))
    // const s = toasterServiceSpy.onFailure.and.returnValue(of({onFailure:{}}))
    const form  = fixture.debugElement.query(By.css('.login-container'));
    component.login()

    form.triggerEventHandler('ngSubmit', null)
    fixture.detectChanges()

    expect(toasterServiceSpy.onFailure).toHaveBeenCalledTimes(1)

  })
});
