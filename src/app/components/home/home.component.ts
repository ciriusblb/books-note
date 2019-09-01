import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
// import { AngularFireAuth } from "angularfire2/auth";
// import { Observable } from "rxjs/Observable";
// import * as firebase from 'firebase/app';
// import { map } from 'rxjs/operators/map';
// import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoriteBooks:any;
  unreadBooks:any;
  allbooks:any;
  // authenticated;
  // user: Observable<firebase.User>;
  constructor(private firebaseService:FirebaseService) { 

    // this.authenticated = false;
    
    // this.af.authState.subscribe(
    //   (auth) => {
    //     if (auth != null) {
    //       this.user = af.authState;
    //       this.authenticated = true;
    //     }
    //   });
  }

  ngOnInit() {
    this.getBooks();
  }
  getBooks(){
    this.firebaseService.getBooks().subscribe(books=>{
      this.allbooks=books;
    });
   

  }
}
