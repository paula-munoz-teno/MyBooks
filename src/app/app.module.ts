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
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'; 

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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Importante para las animaciones
    ToastrModule.forRoot(),
    HttpClientModule // Agrega HttpClientModule aquí
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }