import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id:any;
  bookDetails:any;
  constructor(private firebaseService:FirebaseService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getBookDetails();
  }
  getBookDetails(){
    this.id=this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).valueChanges().subscribe(book=>{
      this.bookDetails=book;
      console.log(this.bookDetails);
    })
  }

}
