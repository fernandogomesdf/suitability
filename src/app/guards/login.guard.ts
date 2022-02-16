import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(public jwtHelper: JwtHelperService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let retorno = true;
    if (!this.isAuthenticated()) {
      sessionStorage.setItem('rotarequerida', next.url.toString());
      this.router.navigate(['/login']);
      retorno = false;
    }
    return retorno;
  }

  public isAuthenticated(): boolean {
    let retorno = false;
    const token = this.jwtHelper.tokenGetter();
    if (token) {
      retorno = !this.jwtHelper.isTokenExpired();
    }
    return retorno;
  }
}
