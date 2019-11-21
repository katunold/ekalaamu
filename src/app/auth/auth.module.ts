import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    SocialAuthComponent,
    LoginComponent,
    PasswordResetComponent
  ],
  imports: [
    RouterModule.forRoot(AuthRoutingModule),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AuthModule { }
