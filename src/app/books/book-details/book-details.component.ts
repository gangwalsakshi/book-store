import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'book-store/src/app/books/books.model';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  id: number;
  constructor(private route:ActivatedRoute,
              private bookservice: BookService,
              private router: Router) {

   }
   ngOnInit(){
     this.route.params
     .subscribe(
       (params: Params)=>{
        this.id= +params['id'];
        this.book = this.bookservice.getBook(this.id);
       }
     )

   }
   onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route});
   }

}
