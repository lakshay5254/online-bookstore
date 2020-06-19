import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';
<<<<<<< HEAD
=======

>>>>>>> refs/heads/search-by-keyword
@Injectable({
  providedIn: 'root'
})
export class BookService {
<<<<<<< HEAD
  private baseUrl="http://localhost:8080/api/v1/books";
  private categoryUrl="http://localhost:8080/api/v1/book-category";
  constructor(private httpClient: HttpClient) { } //injecting http client object into our class
  getBooks(theCategoryId: number): Observable<Book[]>{ //get returns Observable array buffer to get array we mention return type
=======

  private baseUrl = "http://localhost:8080/api/v1/books";
  private categoryUrl = "http://localhost:8080/api/v1/book-category";

  constructor(private httpClient: HttpClient) { }

  getBooks(theCategoryId: number): Observable<Book[]>{
>>>>>>> refs/heads/search-by-keyword
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
<<<<<<< HEAD
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));// getting books data
  } //when we issue get req the response will get mapped into get response books

  getBookCategories(): Observable<BookCategory[]>{
    return this.httpClient.get<GetResponseBooksCategory>(this.categoryUrl).pipe(map(response => response._embedded.bookCategory));
=======
    return this.getBooksList(searchUrl);
  }

  getBookCategories(): Observable<BookCategory[]>{
    return this.httpClient.get<GetResponseBookCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.bookCategory)
    );
  }

  searchBooks(keyword: string): Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}`;
    return this.getBooksList(searchUrl);
  }

  private getBooksList(searchUrl: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.books)
    );
>>>>>>> refs/heads/search-by-keyword
  }
}

<<<<<<< HEAD


interface GetResponseBooks{ //mapping response we get when we do api/v1/books
=======
interface GetResponseBooks{
>>>>>>> refs/heads/search-by-keyword
  _embedded: {
    books: Book[];
  }
}
<<<<<<< HEAD
interface GetResponseBooksCategory{ //mapping response we get when we do api/v1/books
  _embedded: {
    bookCategory: BookCategory[];
  }
}
=======

interface GetResponseBookCategory{
  _embedded: {
    bookCategory: BookCategory[];
  }
}
>>>>>>> refs/heads/search-by-keyword
