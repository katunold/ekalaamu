import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService} from '../../../shared/services/toaster.service';
import { AuthService } from '../../services/auth.service';

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

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private toasterService: ToasterService) { }

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

  login() {
    this.authService.login(this.loginForm.value).subscribe((result) => {
      this.toasterService.onSuccess(result.success)
      this.router.navigate(['/']);
    },
    err => this.toasterService.onFailure(err.error)

  )

  }
}
