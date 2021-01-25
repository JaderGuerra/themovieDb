import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let params = new HttpParams();

    params = params.append('page', '1');
    params = params.append('language', 'es');
    params = params.append('api_key', 'a97061e35b0b95cc28f22973518df71c');

    const reqClone = req.clone({
      params,
    });

    return next.handle(reqClone).pipe(catchError(this.manejarError));
  }

  manejarError(error: HttpErrorResponse) {
    console.warn(error.error.type);
    return throwError('Algo ha salido mal');
  }
}
