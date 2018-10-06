import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {
  constructor(private http: HttpClient) {}

  getRequest(url, query?): Observable<any> {
    return this.http.get(`${url}${this.buildQuery(query)}`);
  }

  postRequest(url, payload): Observable<any> {
    return this.http.post(url, payload);
  }

  putRequest(url, query, payload): Observable<any> {
    return this.http.put(`${url}${this.buildQuery(query)}`, payload);
  }

  deleteRequest(url, query): Observable<any> {
    return this.http.delete(`${url}${this.buildQuery(query)}`);
  }

  buildQuery(query?) {
    if (!query) return '';
    return query.map(q => q + '=' + query[q]).join('&');
  }
}
