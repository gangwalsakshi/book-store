import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { BookService } from '../book.service';


describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let router : Router;
  let service: BookService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    router= TestBed.inject(Router);
    service= TestBed.inject(BookService);
    spyOn(service,'getBooks').and.returnValue([{name:"Angular", description:"xyz", imagePath:"xyz"}]);
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to New Recipe', ()=>{
    spyOn(router,'navigate');
    component.onNewRecipe();
    expect(router.navigate).toHaveBeenCalled();
  
  });
});
