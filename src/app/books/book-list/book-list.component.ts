import { Component, OnInit } from '@angular/core';
import { Book } from '../books.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books :Book[] = [
    new Book("Test Book","This is a Test Book", "xyz"),
    new Book("Test Book","This is a Test Book", "xyz")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
