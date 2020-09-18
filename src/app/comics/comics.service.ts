import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Comic } from './comic.model';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators'

@Injectable()
export class ComicsService {
  constructor(private httpClient: HttpClient) { }

  getComics() {
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://api.shortboxed.com/comics/v1/query?title=spider-man');
  }
}
