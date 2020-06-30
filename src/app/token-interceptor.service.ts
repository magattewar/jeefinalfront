import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(/*private injector: Injector,*/ private router: Router){}
  intercept(req, next) {

    //const authService = this.injector.get(LoginService)
    //const token = authService.loggedIn();
    const token = localStorage.getItem('token');
    console.log(token);
    if(token !== 'undefined'){
      req = req.clone(
      {
          setHeaders :{
            Authorization:`Bearer ${token}`
          }
      })
    }
    console.log('-----------------' + token);
    return next.handle(req).pipe(tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
        else if(err.status === 403){
          this.router.navigate(['accessdenied']);
        }
      }
      }));
  }
}
