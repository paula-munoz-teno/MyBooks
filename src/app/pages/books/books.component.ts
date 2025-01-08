import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public parametro: string;
  public books: Book[] = []; // Array para almacenar los libros

  constructor(
    private bookService: BooksService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.parametro = this.rutaActiva.snapshot.params.parametro1;
    this.loadBooks(); // Cargar los libros al inicializar el componente
  }

  loadBooks(): void {
    this.bookService.getAll().subscribe({
        next: (response: Respuesta) => {
            if (response.error) {
                this.handleError(response.mensaje);
            } else {
                if (Array.isArray(response.data) && response.data.length > 0) {
                    this.books = response.data as Book[]; // Asignar los datos recibidos al array de libros
                } else {
                    this.handleError('No hay libros disponibles'); // Mensaje de error si no hay libros
                }
            }
        },
        error: (error) => this.handleError('Error al cargar los libros: ' + error)
    });
}

  handleError(message: string): void {
    console.error(message);
    this.toastr.error(message, 'Error');
  }

  idNoExiste(): void {
    this.toastr.warning('Id no existe', 'Advertencia');
  }

  irFormulario(): void {
    this.router.navigate(["/formulario"]);
  }


eliminarTarjeta(id_book: number): void {
  console.log('Eliminando libro con ID:', id_book); // Agrega este log
  this.bookService.delete(id_book).subscribe({
      next: (response: Respuesta) => {
          if (response.error) {
              this.handleError(response.mensaje);
          } else {
              this.toastr.success('Libro eliminado con éxito');
              this.loadBooks(); // Recargar la lista de libros después de eliminar
          }
      },
      error: (error) => this.handleError('Error al eliminar el libro: ' + error)
  });
}

  buscarLibros(idinsertado: HTMLInputElement): void {
    const id = Number.parseInt(idinsertado.value);
    console.log('Buscando libro con ID:', id); // Agrega este log
    
    if (id) {
        this.bookService.getOne(id).subscribe({
            next: (response: Respuesta) => {
                if (response.error) {
                    this.idNoExiste(); // Llama al método para mostrar la notificación
                } else {
                    this.books = [response.data as Book]; // Asigna el libro encontrado al array
                    console.log('Libro encontrado:', response.data); // Agrega este log
                }
            },
            error: (error) => {
                console.error('Error al buscar el libro:', error);
                this.idNoExiste(); // Llama al método para mostrar la notificación
            }
        });
    } else {
        this.loadBooks(); // Si el campo de búsqueda está vacío, muestra todos los libros
    }
}
}