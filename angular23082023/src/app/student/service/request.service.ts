import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getdata(): Observable<any> {
    return this.http.get(this.url + '/posts');
  }
  cratedata(data: any): Observable<any> {
    console.log('Entered');
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
