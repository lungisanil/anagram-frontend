import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private url = 'http://localhost:8080/anagram-service/rest/activities/';

  constructor(private httpClient: HttpClient) {
  }

  getAllAddedWords(pageNumber: number, pageSize: number): Observable<any> {
    pageNumber--
    let context = 'added?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
    return this.httpClient.get<any>(this.url + context);
  }

  getAllRemovedWords(pageNumber: number, pageSize: number): Observable<any> {
    pageNumber--
    let context = 'removed?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
    return this.httpClient.get<any>(this.url + context);
  }
}
