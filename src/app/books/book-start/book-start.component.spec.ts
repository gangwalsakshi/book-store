import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStartComponent } from './book-start.component';

describe('BookStartComponent', () => {
  let component: BookStartComponent;
  let fixture: ComponentFixture<BookStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book start',()=>{
    let compiled= fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toBe("Please select a Book");
  });

});
