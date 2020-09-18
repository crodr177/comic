import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getComic(character) {
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://api.shortboxed.com/comics/v1/query?title=${character}`);
  }
}
