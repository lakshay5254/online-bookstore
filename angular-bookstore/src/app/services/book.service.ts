import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8080/api/v1/books";
  constructor(private httpClient: HttpClient) { } //injecting http client object into our class
  getBooks():Observable<Book[]>{ //get returns Observable array buffer to get array we mention return type
    return this.httpClient.get<GetResponseBooks>(this.baseUrl).pipe(map(response => response._embedded.books));// getting books data
  } //when we issue get req the response will get mapped into get response books
}

interface GetResponseBooks{ //mapping response we get when we do api/v1/books
  _embedded: {
    books: Book[];
  }
}