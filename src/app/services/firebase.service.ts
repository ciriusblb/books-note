import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  booksRef: AngularFireList<any>;
  books: Observable<any[]>;
  bookDetails:AngularFireObject<any>;
  constructor(private db:AngularFireDatabase) { }

  // getAllBooks(){
  //   this.books = this.db.list('/books');
  //   return this.books;
  // }
  
  getBooks(){
    // this.books= this.db.list('/books')
    //   .snapshotChanges()
    //   .pipe(map(items => {           
    //     return items.map(a => {
    //       const data = a.payload.val();
    //       const key = a.payload.key;
    //       return {key, ...data};           
    //     });
    //   }));
    //   return this.books;
    this.booksRef = this.db.list('/books');
    // Use snapshotChanges().map() to store the key
    this.books = this.booksRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    return this.books;
  }

  getBookDetails(id){
    this.bookDetails=this.db.object('/books/'+id) as AngularFireObject<any>;
    return this.bookDetails;
  }
  addBook(bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); 
    this.booksRef.push(filteredBook);
  }
  updateBook(id, bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    this.booksRef.update(id,filteredBook);
  }
  deleteBook(key: string) {
    this.booksRef.remove(key);
  }
}