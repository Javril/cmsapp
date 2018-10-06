import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string = 'http://jsonplaceholder.typicode.com/users';
  queryUrl: string = '?search=';

  constructor(private http: HttpClient) {}

  search(terms: Observable<string>) {
    return terms
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
      .get(this.baseUrl + this.queryUrl + term)
      .map((res: Response) => {
        return res;
      });
  }

  searchv2(term: string) {
    return this.http
      .get(`http://jsonplaceholder.typicode.com/users?search=${term}`)
      .map(response => response);
  }

  getCountries() {
    return this.http.get('/src/assets/data/countries.json');
  }
}
