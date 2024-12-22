import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  constructor(public bookService: BooksService, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  // Método para mostrar una notificación de éxito
  editaBien() {
    this.toastr.success('Libro editado correctamente', 'Información');
  }

  // Método para mostrar una notificación de error
  noEncuentraLibro() {
    this.toastr.error('No se encuentra libro', 'Error');
  }

  cambioBook(title: string, type: string, author: string, price: number, photo: string, id_book: any, id_user: any) {
    // Conversión de id_book y id_user a número
    id_book = Number(id_book);
    id_user = Number(id_user);

    // Verifica que los valores sean válidos
    console.log('ID del libro:', id_book); // Verifica el valor del ID

    // Validación de campos
    if (!title || !type || !author || !price || !photo || isNaN(id_book) || isNaN(id_user)) {
      console.error('Todos los campos son obligatorios y deben ser válidos.');
      this.toastr.error('Todos los campos son obligatorios y deben ser válidos.', 'Error');
      return;
    }

    let modifiedBook = new Book(title, type, author, price, photo, id_book, id_user);
    console.log('Libro a modificar:', modifiedBook); // Verifica el objeto

    // Suscribirse al Observable devuelto por el método edit
    this.bookService.edit(modifiedBook).subscribe({
      next: (response: Respuesta) => {
        if (response.error) {
          this.noEncuentraLibro(); // Muestra la notificación de error
          console.error('No se encontró el libro para modificar:', response.mensaje);
        } else {
          this.editaBien(); // Muestra la notificación de éxito
          console.log('Libro modificado exitosamente:', response.data); // Manejar la respuesta del servidor
        }
      },
      error: (error) => {
        this.noEncuentraLibro(); // Muestra la notificación de error
        console.error('Error al modificar el libro:', error);
      }
    });
  }
}