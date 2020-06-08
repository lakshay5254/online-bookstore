import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  books :Book[];
  constructor(private _bookService: BookService) { }
// injecting book service 
  ngOnInit() {  //it is a life cycle method,it will call as soon as BookListCompenent get created
    this.listBooks();
  }
  listBooks(){  // method to call service method 
    this._bookService.getBooks().subscribe(//it will not get executed until we subscribe to it 
      data => this.books=data //saving data inside books component
    )
  }

}
