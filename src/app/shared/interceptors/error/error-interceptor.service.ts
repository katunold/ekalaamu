import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable, ObservableInput, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToasterService } from '../../services/toaster.service';
import { environment } from '../../../../environments/environment.prod';

const errorHandler = (toaster: ToasterService) => (error: any, caught: Observable<any>): ObservableInput<any> => {

  if(error.url === `${environment.baseUrl}/api/v1/login`){
    toaster.onFailure(error.error.Errors);
    return [];
  }
  toaster.onFailure(error.error.errors[0]);
  return [];
};

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private toaster: ToasterService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(
        errorHandler(this.toaster)
      )
    );
  }
}
