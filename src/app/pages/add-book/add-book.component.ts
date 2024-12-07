import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  constructor(public bookService: BooksService) {}

  ngOnInit(): void {
    
  }

  nuevoBook(title: string, type: string, author: string, price: number, photo: string, id_book: number, id_user: number) {
    if (!title || !type || !author || !price || !photo || !id_book || !id_user) {
      console.error('Todos los campos son obligatorios.');
      return;
    }
  
    let newBook = new Book(title, type, author, price, photo, id_book, id_user);
    this.bookService.add(newBook);
    console.log('Libro agregado:', newBook);
    console.log(this.bookService.getAll());
  
  }
  }


