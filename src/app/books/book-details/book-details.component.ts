import { Component, OnInit } from '@angular/core';
//import {bookDetails} from '../shared/bookdetails'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  bookID: number = 101;
  status: string = 'available';
  allowNewBook= true;
  bookstatus='No New book Added';
  bookName='';
  bId=10;
  bStatus="available";
  books=[ { id:1, name:"To Kill A Mockingbird", status: "available" },  
  { id:2, name:"Pride and Prejudice", status: "Out of Stock" },
  { id:3, name:"XYZ", status: "available" },
  { id:4, name:"Ulysses", status: " available" },
  { id:5, name:"War And Peace", status: "available" }
];


  constructor() { }

  OnaddNewBook(){
    this.bookstatus='New Book Added';
    //this.books.push(this.bId,this.bookName,this.bStatus);
  }
  getColor(){
    return this.status === 'available' ? 'green' : 'red';
  }

}
