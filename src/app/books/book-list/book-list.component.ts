import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../books.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 books : Book[];
 subscription: Subscription;

  
  constructor(private bookService: BookService, 
              private router: Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.bookService.booksChanged
      .subscribe(
        (recipes: Book[]) => {
          this.books = recipes;
        }
      );
    this.books = this.bookService.getBooks();
  }

  onNewBook(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
