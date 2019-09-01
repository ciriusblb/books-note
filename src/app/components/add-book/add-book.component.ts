import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookDetails:any={
    author:'',
    title:'',
    price:'',
    dateadded:'',
    dateread:'',
    description:'',
    imageUrl:'',
    rate:''
  }
  isRead:boolean=false;
  constructor(private firebaseService:FirebaseService,  private router:Router) { }

  ngOnInit() {
  }
  submitAdd(){
    this.firebaseService.addBook(this.bookDetails);
    // this.router.navigate(['books']);
  }

}
