import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

const AppRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'books', component: BooksComponent},
  { path: 'book/:id', component: BookComponent},
  { path: 'add-book', component: AddBookComponent},
  { path: 'edit-book/:id', component: EditBookComponent},
  { path: 'delete-book/:id', component: DeleteBookComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes,{ enableTracing: true })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }



