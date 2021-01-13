import { EventEmitter, Injectable } from '@angular/core';
import { Book } from 'book-store/src/app/books/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 bookSelected = new EventEmitter<Book>();
 
 constructor() { }
 
 private books :Book[] = [
    new Book("Test Book","This is a Test Book", "xyz"),
    new Book("Another Test Book","This is a Test Book", "xyz")
  ];

  getBooks(){
    return this.books.slice();
  }
  


}
