import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = 'http://localhost:3001/api/auth';
  constructor(private http: HttpClient) {   }
  
  login(data: any):Observable<any>{
    return this.http.post(this.apiurl + "/login", data);
  }
  logout(data: any):Observable<any>{
    return this.http.post(this.apiurl + "/logout", data);
  }
}
