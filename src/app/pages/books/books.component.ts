import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public parametro: string;

  //arrray de libros 
 

  constructor(public bookService: BooksService, private router: Router, private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.bookService.getAll());
    this.parametro = this.rutaActiva.snapshot.params.parametro1;
  }

  irFormulario() {
    this.router.navigate(["/formulario"]);
  }

  eliminarTarjeta(id_book: number) {
    console.log(id_book);
    const resultado = this.bookService.delete(id_book);
    if (resultado) {
      console.log('Libro eliminado con éxito');
      //dar array de libros.getall
    } else {
      console.log('No se encontró el libro para eliminar');
    }

  }


  // si el html es igual a un id que me de el libro correspondiente y si no todos
//  buscarLibros(id_book) {
//   if (id_book) {
//     let book = this.bookService.getOne(id_book);
//     // Si se encuentra el libro, lo muestra; si no, muestra un array vacío
//     return book ? [book] : [];
//   } else {
//     return this.bookService.getAll(); // Si el campo de búsqueda está vacío, muestra todos los libros
//   }

// }



buscarLibros(idinsertado: HTMLInputElement) {
  this.bookService.getOne(Number.parseInt(idinsertado.value))

}
}


