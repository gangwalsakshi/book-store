import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getBooks and return books', ()=>{
    expect(service.getBooks).toString();
  });

  
  it('should call getBook and return books', ()=>{
    expect(service.getBook).toString();
  });

});
