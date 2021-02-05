import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Book } from 'book-store/src/app/books/books.model';

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let router : Router;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookEditComponent ],
      imports:[RouterTestingModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    router= TestBed.inject(Router);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty',()=>{
    expect(component.bookForm.valid).toBeFalsy();
  });

  it(' name field validity ',()=>{
    let errors = {};
    let name = component.bookForm.controls['name'];
    errors = name.errors || {};

    expect(errors['required']).toBeTruthy();
  });
  

  it(' imagePath field validity ',()=>{
    let errors = {};
    let imagePath = component.bookForm.controls['imagePath'];
    errors = imagePath.errors || {};

    expect(errors['required']).toBeTruthy();
  });

  
  it(' description field validity ',()=>{
    let errors = {};
    let description = component.bookForm.controls['description'];
    errors = description.errors || {};

    expect(errors['required']).toBeTruthy();
  });

});
