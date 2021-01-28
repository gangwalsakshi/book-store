import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let router : Router;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookEditComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    router= TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book edit',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toEqual('book-edit works!');
  });

});
