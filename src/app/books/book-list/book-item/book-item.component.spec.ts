import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../../book.service';
import { BookItemComponent } from './book-item.component';
import { RouterTestingModule} from '@angular/router/testing';


describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;
  let service: BookService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookItemComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    service= TestBed.inject(BookService);
    component.book={name:"Angular", description:"xyz", imagePath:"xyz"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book name',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain(component.book.name);
  });

  it('should display book description',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(component.book.description);
  });

  it('should display book image',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('img').src).toContain(component.book.imagePath);
  });


});
