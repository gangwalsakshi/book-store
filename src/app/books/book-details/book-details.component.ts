import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'book-store/src/app/books/books.model';
//import {bookDetails} from '../shared/bookdetails'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book: Book;
  constructor() { }

  
}
