import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8080/api/v1/books";
  private categoryUrl="http://localhost:8080/api/v1/book-category";
  constructor(private httpClient: HttpClient) { } //injecting http client object into our class
  getBooks(theCategoryId: number): Observable<Book[]>{ //get returns Observable array buffer to get array we mention return type
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));// getting books data
  } //when we issue get req the response will get mapped into get response books

  getBookCategories(): Observable<BookCategory[]>{
    return this.httpClient.get<GetResponseBooksCategory>(this.categoryUrl).pipe(map(response => response._embedded.bookCategory));
  }
}



interface GetResponseBooks{ //mapping response we get when we do api/v1/books
  _embedded: {
    books: Book[];
  }
}
interface GetResponseBooksCategory{ //mapping response we get when we do api/v1/books
  _embedded: {
    bookCategory: BookCategory[];
  }
}