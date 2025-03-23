import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private url = 'http://localhost:8080/anagram-service/rest/word/';

  constructor(private httpClient: HttpClient) {
  }

  getAllWords(pageNumber: number, pageSize: number): Observable<any> {
    pageNumber--
    let context = 'retrieve/all?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
    return this.httpClient.get<any>(this.url + context);
  }

  addWord(wordToAdd: string): Observable<any> {
    let context = 'add/' + wordToAdd;
    return this.httpClient.post<any>(this.url + context, null);
  }

  removeWord(wordToRemove: string): Observable<any> {
    let context = 'remove/' + wordToRemove;
    return this.httpClient.delete<any>(this.url + context);
  }
}
