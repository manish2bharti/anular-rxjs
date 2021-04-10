import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Search } from "./appInterface/search.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getSearches(searchTerm): Observable<Search>{
    return this.http.get<Search>(this.url+'?userId='+searchTerm);
  }
}
