import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ILogin} from '../../interfaces/api';

@Injectable({providedIn: 'root'})
export class AuthService {
  public user: ILogin;

  constructor(
  ) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  get token(): string {
    return localStorage.getItem('x-auth-token');
  }

  login(data: ILogin): Observable<any> {
    return of(data).pipe(
      mergeMap(
        (d) => {
          //d.login !== 'ivan' || d.password !== 'ivan'
          // if (d.login !== 'ivan' || d.password !== 'ivan') {
          //   return throwError(new Error('error user'));
          // } else {
          this.user = {...data};
          localStorage.setItem('user', JSON.stringify(this.user));
          this.setToken(`${Date.now()}`);
          return of(true);
          // }
        }
      )
    );
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(token) {
    if (token) {
      localStorage.setItem('x-auth-token', token);
    } else {
      localStorage.removeItem('x-auth-token');
    }
  }
}
