import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { By } from '@angular/platform-browser';

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

  
  it('should navigate to New Book', ()=>{
    spyOn(router,'navigate');
    component.onNewBook();
    expect(router.navigate).toHaveBeenCalled();
  });

  describe('BookItemDetails',()=>{

    beforeEach(()=>{
      component.books=[
        {name: "name1",description:"desc1",imagePath:"img1"},
        {name: "name2",description:"desc2",imagePath:"img2"},
        {name: "name3",description:"desc3",imagePath:"img3"}  
      ];
      fixture.detectChanges();  
    });
   
    it('should contain bookdetails', ()=>{
      const appbookitemdetailcomponent = fixture.debugElement.query(By.css('.js-test-book-details0'));
      expect(appbookitemdetailcomponent.nativeElement).toBeTruthy();
      expect(appbookitemdetailcomponent.properties.book).toEqual(
        {name: "name1",description:"desc1",imagePath:"img1"});
      expect(appbookitemdetailcomponent.properties.index).toEqual(0);
    });
  
    it('should contain bookdetails 2', ()=>{
      const appbookitemdetailcomponent = fixture.debugElement.query(By.css('.js-test-book-details1'));
      expect(appbookitemdetailcomponent.nativeElement).toBeTruthy();
      expect(appbookitemdetailcomponent.properties.book).toEqual(
        {name: "name2",description:"desc2",imagePath:"img2"});
      expect(appbookitemdetailcomponent.properties.index).toEqual(1);
    });
  
    it('should contain bookdetails 3', ()=>{
       const appbookitemdetailcomponent = fixture.debugElement.query(By.css('.js-test-book-details2'));
      expect(appbookitemdetailcomponent.nativeElement).toBeTruthy();
      expect(appbookitemdetailcomponent.properties.book).toEqual(
        {name: "name3",description:"desc3",imagePath:"img3"});
      expect(appbookitemdetailcomponent.properties.index).toEqual(2);
    });
  

  });

 
});
