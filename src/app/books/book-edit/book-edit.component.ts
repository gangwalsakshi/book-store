import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  editMode = false;
  bookForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private bookService:BookService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.bookService.updateBook(this.id, this.bookForm.value);
    } else {
      this.bookService.addBook(this.bookForm.value);
    }
    this.onCancel();
  }
  
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let bookName = '';
    let bookImagePath = '';
    let bookDescription = '';
    
    if (this.editMode) {
      const book = this.bookService.getBook(this.id);
      bookName = book.name;
      bookImagePath = book.imagePath;
      bookDescription = book.description;
    }

    this.bookForm = new FormGroup({
      'name': new FormControl(bookName, Validators.required),
      'imagePath': new FormControl(bookImagePath, Validators.required),
      'description': new FormControl(bookDescription, Validators.required),
     });
  }

}
