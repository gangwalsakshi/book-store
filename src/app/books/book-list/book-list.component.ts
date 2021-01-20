import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../books.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 books : Book[];
  
  constructor(private bookService: BookService, 
              private router: Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.books=this.bookService.getBooks()
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
  

}
