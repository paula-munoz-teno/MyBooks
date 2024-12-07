import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './pages/books/books.component';
import { ReflibroPipe } from './pipes/reflibro.pipe';
import { CardComponent } from './components/card/card.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksService } from './shared/books.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    ProfileComponent,
    BooksComponent,
    ReflibroPipe,
    CardComponent,
    UpdateBookComponent,
    AddBookComponent,

   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule

  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
