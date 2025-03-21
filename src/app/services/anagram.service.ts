import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WordRecord} from "../models/WordRecord";

@Injectable({
  providedIn: 'root'
})
export class AnagramService {
  private url = 'http://localhost:8080/anagram-service/rest/anagram/retrieve/anagrams/';

  constructor(private httpClient: HttpClient) {
  }

  countAnagramsOfAllWordLengths(): Observable<any> {
    let context = "count";
    return this.httpClient.get<any>(this.url + context);
  }

  getAnagramsForGivenWord(givenWord: String): Observable<WordRecord[]> {
    return this.httpClient.get<WordRecord[]>(this.url + givenWord);
  }
}
