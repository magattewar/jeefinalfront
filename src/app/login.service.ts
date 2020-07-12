import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public loginRequest(user: any){
    return this.http.post<any>(this.REST_API_SERVER + "/login", user, {observe:'response'})
  }

  saveToken(jwt){
    sessionStorage.setItem('token', jwt.accessToken)
    sessionStorage.setItem('authorities', jwt.authorities[0].authority)
    sessionStorage.setItem('username', jwt.username)
  }

  logout()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('authorities');
    sessionStorage.removeItem('username');
  }
}
