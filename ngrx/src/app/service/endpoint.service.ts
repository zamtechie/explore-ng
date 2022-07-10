import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, payload: any): Observable<any> {
    return this.http.post(url, payload);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

}
