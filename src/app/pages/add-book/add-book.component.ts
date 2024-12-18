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

  nuevoBook(title: string, type: string, author: string, price: string, photo: string, id_book: string, id_user: string) {
    // Convertir los valores a números
    const numericPrice = parseFloat(price);
    const numericIdBook = parseInt(id_book, 10);
    const numericIdUser  = parseInt(id_user, 10);

    if (!title || !type || !author || isNaN(numericPrice) || !photo || isNaN(numericIdBook) || isNaN(numericIdUser )) {
      console.error('Todos los campos son obligatorios y deben ser válidos.');
      return;
    }

    let newBook = new Book(title, type, author, numericPrice, photo, numericIdBook, numericIdUser );
    this.bookService.add(newBook);
    alert("Book added to page Books");
    console.log('Libro agregado:', newBook);
    console.log(this.bookService.getAll());
  }

  }


