import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})


export class UpdateBookComponent implements OnInit {
  constructor(public bookService: BooksService) {}

  ngOnInit(): void {
    
  }

    
 

  cambioBook(title: string, type: string, author: string, price: number, photo: string, id_book: number, id_user: number) {
    // Conversión de id_book y id_user a número
    id_book = Number(id_book);
    id_user = Number(id_user);

    if (!title || !type || !author || !price || !photo || !id_book || !id_user) {
      console.error('Todos los campos son obligatorios.');
      return;
    }

    let modifiedBook = new Book(title, type, author, price, photo, id_book, id_user);
    console.log('Libro a modificar:', modifiedBook); // Verifica el objeto

    const success = this.bookService.edit(modifiedBook);
    
    if (success) {
      alert("Book edited successfully");
      console.log('Libro modificado exitosamente.');
    } else {
      alert("The book to be modified was not found.");
      console.error('No se encontró el libro para modificar.');
    }

    console.log(this.bookService.getAll());
}





}




