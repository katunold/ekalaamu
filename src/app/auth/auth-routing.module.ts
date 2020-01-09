import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';

export const AuthRoutingModule: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  }
];
