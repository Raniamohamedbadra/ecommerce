import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any ;

  constructor(private _HttpClient:HttpClient) { };
  registerForm(userData:object) :Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData)
  }
  loginForm(userData:object) :Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData)
  }

  saveUser(){
    const encode = localStorage.getItem('_token');
    if(encode){
      const dcode  = jwtDecode(encode);
      this.userData = dcode;


    }
  }
}
