import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }
  addContact(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/contact', data);
  }

  updateContact(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/contact/${id}`, data);
  }

  getContactList(): Observable<any> {
    return this._http.get('http://localhost:3000/contact');
  }

  deleteContact(id: number):Observable<any> {
    return this._http.delete(`http://localhost:3000/contact/${id}`);
  }
}
