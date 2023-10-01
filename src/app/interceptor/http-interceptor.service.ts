import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('toConsumes')){
      //'enctype': 'multipart/form-data'
      console.log("Ici l'intercepteur avec un consumes de multipart/form-data")
      //Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
      const authRequest = req.clone({
        headers: new HttpHeaders()
          .set("Content-Type","multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW")
      });
      localStorage.removeItem('toConsumes');
      return next.handle(authRequest);
    }
    return next.handle(req);
  }
}
