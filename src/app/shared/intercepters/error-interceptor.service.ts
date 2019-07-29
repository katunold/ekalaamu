import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService} from "../../components/login/service/login.service";
import { ToasterService } from '../services/toaster.service';
import { environment } from "../../../environments/environment";

const errorHandler = (toaster: ToasterService) => (error: any, caught: Observable<any>): ObservableInput<any> => {
  if(error.url===`${environment.base_url}/login`){
    toaster.onFailure(error.error.Errors);
    return []
  }
  toaster.onFailure(error.error.Errors[0]);
  return [];
};

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private authService: LoginService,
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
