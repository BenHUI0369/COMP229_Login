import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = '/api/users/login';
  constructor(private http: HttpClient) {   }
  
  login(data: any):Observable<any>{
    return this.http.post(this.apiurl, data);
  }
}
