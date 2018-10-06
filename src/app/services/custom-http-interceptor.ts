import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({ providedIn: 'root' })
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();

    // loading should start here
    return next.handle(req).do(
      event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(req.url + ' took ' + elapsed, 'ms');
        }
        // end loading
      },
      (error: any) => {
        if (error instanceof HttpResponse) {
          this.showErr(error);
          console.log('Problem occured', error);
        }
        // end loading
      }
    );
  }

  showErr(error) {
    if (error) {
    }
  }
}
