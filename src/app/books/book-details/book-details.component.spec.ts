import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../book.service';

import { BookDetailsComponent } from './book-details.component';
import { RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';


describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let router : Router;
  let service: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    router= TestBed.inject(Router);
    service= TestBed.inject(BookService);
    component = fixture.componentInstance;
    spyOn(service,'getBook').and.returnValue({name:"Angular", description:"xyz", imagePath:"xyz"});
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to Edit',()=>{
    spyOn(router,'navigate');
    component.onEditRecipe();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should display book name',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.book.name);
  });

  it('should display book description',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(component.book.description);
  });

  it('should display book image',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('div.col-xs-12>img').src).toContain(component.book.imagePath);
  });


});
