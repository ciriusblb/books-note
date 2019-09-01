import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id;
  editBook:any={
    author:'',
    title:'',
    price:'',
    dateadded:'',
    dateread:'',
    description:'',
    imageUrl:'',
    rate:''
  }
  
  constructor( private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook();
  }
  getBook(){
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).valueChanges().subscribe(book => {
      this.editBook=book;
    });
  }
  submitEdit(){
    this.firebaseService.updateBook(this.id, this.editBook);
    // this.router.navigate(['/books'])
  }

}
