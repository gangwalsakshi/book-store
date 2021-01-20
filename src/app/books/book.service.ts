import {  Injectable  } from '@angular/core';
import { Book } from 'book-store/src/app/books/books.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
 
 constructor() { }
 
 private books :Book[] = [
    new Book("To Kill A Mockingbird",
    "The novel examines racism in the American South through the eyes of clever Young girl.",
     "https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg"),
    new Book("The Great Gatsby",
    "This novel is told from the perspective of a young man who has recently moved to NewYork City.", 
    "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"),
    new Book("A Passage to India",
     "The book was published in 1924 and follows a Muslim Indian doctor and his relationships with an English professor.",
    "https://images-na.ssl-images-amazon.com/images/I/51IaTtJ2bfL._SX330_BO1,204,203,200_.jpg"),
    new Book("Invisible Man",
    "Invisible Man is a groundbreaking novel in the expression of identity for the African American male. The narrator of the novel, a man who is never named but believes he is “invisible” to others socially.",
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg")
  ];

  getBooks(){
    return this.books.slice();
  }
  getBook(index:number){
    return this.books[index];
  }
  


}
