import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  books :Book[];
  currentCategoryId:number;
  constructor(private _bookService: BookService, private _activatedRoute: ActivatedRoute) { }
// injecting book service 
  ngOnInit() {  //it is a life cycle method,it will call as soon as BookListCompenent get created
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    })
  }
  listBooks(){  // method to call service method 
    const hasCategoryId: boolean=this._activatedRoute.snapshot.paramMap.has('id');//checking if activated route contains the id parameter or not

    if(hasCategoryId){
      this.currentCategoryId=+this._activatedRoute.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId=1;  //default cat id
    }


    this._bookService.getBooks(this.currentCategoryId).subscribe(//it will not get executed until we subscribe to it 
      data => this.books=data //saving data inside books component
    )
  }

}
