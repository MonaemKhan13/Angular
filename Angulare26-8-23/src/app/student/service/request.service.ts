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
  updatedata(data: any) {
    console.log('Entered Update');
    return this.http.put(
      'https://jsonplaceholder.typicode.com/posts/' + data.id,
      data
    );
  }
  deletedata(Id: any) {
    console.log('Delete Succesfull');
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + Id);
  }
}
