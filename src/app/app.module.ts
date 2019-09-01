import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//forms
import { FormsModule } from '@angular/forms';

//routes
import { AppRoutingModule } from './app-routing.module';

//material design modules
import { MatButtonModule,
  MatCardModule, 
  MatGridListModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatToolbarModule, 
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule} from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// import { AngularFireAuthModule } from 'angularfire2/auth';

//services
import { FirebaseService } from './services/firebase.service';

//pipes
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase,'book-notes-app'),
    AngularFireDatabaseModule,
    // AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
