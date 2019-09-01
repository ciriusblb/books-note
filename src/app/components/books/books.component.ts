import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  allBooks:any;
  constructor(private FirebaseService:FirebaseService) {  }

  ngOnInit() {
    this.getAllBooks();
  }
  getAllBooks(){
    this.FirebaseService.getBooks().subscribe(books=>{
      this.allBooks=books;
      console.log(this.allBooks);
    });
  }

}
