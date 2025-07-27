import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          switch (error.status) {
            case 0:
              this.toastr.error(
                'Cannot connect to the server. Please check your internet connection or try again later.'
              );
              break;
            case 400:
              {
                if (error.error.errors) {
                  const modelStateErrors = [];
                  for (const key in error.error.errors) {
                    if (error.error.errors[key]) {
                      modelStateErrors.push(error.error.errors[key]);
                    }
                  }
                  console.log(modelStateErrors);
                  throw modelStateErrors.flat();
                } else {
                  throw error;
                }
              }
              break;
            case 401:
              this.toastr.error('You are not authorized to perform this action.');
              break;
            case 409:
              throw error;
            default:
              this.toastr.error('Server error.');
              break;
          }
        }
        return throwError(() => error);
      })
    );
  }
}