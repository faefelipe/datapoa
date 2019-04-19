import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let response;

    const authReq = req.clone();

    response = next.handle(authReq);

    return response.pipe(tap(data => {}, err => {
        if(err.status == 500){
            alert("Erro ao se comunicar com o servidor. Tente novamente mais tarde.");
        }
    }));
  }
}
