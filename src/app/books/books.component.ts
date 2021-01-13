import { Component, OnInit } from '@angular/core';
import { Book } from 'book-store/src/app/books/books.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  selectedBook : Book;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.bookSelected
    .subscribe(
      (book:Book)=>{
        this.selectedBook=book;
    })
  }


}
