import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  passwordResetForm: FormGroup;
  emailCtrl: FormControl;

  constructor() { }

  ngOnInit() {

    this.emailCtrl = new FormControl('', {validators: [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]});

    this.passwordResetForm = new FormGroup({
      email: this.emailCtrl
    })
  }

  sendResetLink = () => {
    console.log(this.passwordResetForm.value, '++++++++++++++')
  }

}
