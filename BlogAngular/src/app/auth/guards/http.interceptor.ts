
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if(req.headers.get('noauth')){
            return next.handle(req.clone());
        } else {
            const clonereq = req.clone({
                headers : req.headers.set('Authorization', 'Bearer ' + this.loginService.getToken())
            });

            return next.handle(clonereq).pipe(
                tap(
                  event => {},
                  error => {
                      if(error.error.auth === false){
                          this.router.navigateByUrl('/auth/login')
                      }
                  }  
                )
            );
        }
    }
}