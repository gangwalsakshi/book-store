import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../books.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book:Book;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }
  onSelected(){
    this.bookService.bookSelected.emit(this.book);
  }

}
