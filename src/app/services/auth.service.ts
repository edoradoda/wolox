import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com';
  public httpOptions: any;
  constructor(
      private http: HttpClient,
      private router: Router,
     ) { }

  login(param) {
    const  user = {
      email: param.email,
      password: param.password
    };
    localStorage.setItem('alerted', '');
    return this.http.post<any>(this.url + '/login', user);
    // return this.http.post<any>("/api/login",user);
  }


  register(param) {
    const  user = {
      email: param.email,
      password: param.password
    };
    localStorage.setItem('alerted', '');
    return this.http.post<any>(this.url + '/signup', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  //  localStorage.removeItem('token');
  //  localStorage.removeItem('mail');
  //  localStorage.removeItem('group');
  //  localStorage.removeItem('netUser');
    this.router.navigate(['/land']);
  }
}
