import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  constructor(public bookService: BooksService, private toastr: ToastrService) {}

  ngOnInit(): void {
    
  }

  añadirLibroBien() {
    this.toastr.success('Libro agregado exitosamente', 'Éxito');
  }

  nuevoBook(title: string, type: string, author: string, price: string, photo: string, id_book: string, id_user: string) {
    // Convertir los valores a números
    const numericPrice = parseFloat(price);
    const numericIdBook = parseInt(id_book, 10);
    const numericIdUser   = parseInt(id_user, 10);

    if (!title || !type || !author || isNaN(numericPrice) || !photo || isNaN(numericIdBook) || isNaN(numericIdUser  )) {
      console.error('Todos los campos son obligatorios y deben ser válidos.');
      return;
    }

    let newBook = new Book(title, type, author, numericPrice, photo, numericIdBook, numericIdUser );
    this.bookService.add(newBook);
    this.añadirLibroBien(); // Llamar al método para mostrar el toast
    console.log('Libro agregado:', newBook);
    console.log(this.bookService.getAll());
  }
}