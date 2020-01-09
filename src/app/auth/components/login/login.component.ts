import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToasterService} from '../../../shared/services/toaster.service';
import { AuthService } from '../../services/auth.service';
import { PasswordResetComponent } from '../password-reset/password-reset.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signup/signup.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  isSubmitted  =  false;
  hover: boolean;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toasterService: ToasterService,
    private matDialog: MatDialog
    ) { }

  ngOnInit() {
    this.emailCtrl = new FormControl('', {validators:
        [Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      ,updateOn: 'blur'
    })
    this.passwordCtrl = new FormControl('', {validators:
        [Validators.required,
          Validators.minLength(3)
        ]})

    this.loginForm  =  new FormGroup({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  login =() => {
    this.authService.login(this.loginForm.value).subscribe((result) => {
      this.toasterService.onSuccess(result.success)
      this.router.navigate(['/']);
    },
    err => this.toasterService.onFailure(err.error)

  )

  }

  forgotPasswordDialog = () => {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = '600px'
    // dialogConfig.height = '300px'
    this.matDialog.open(PasswordResetComponent, dialogConfig)
  }
}
