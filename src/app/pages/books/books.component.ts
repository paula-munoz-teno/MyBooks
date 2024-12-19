import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public parametro: string;

  //arrray de libros 
 

  constructor(public bookService: BooksService, private router: Router, private rutaActiva: ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log(this.bookService.getAll());
    this.parametro = this.rutaActiva.snapshot.params.parametro1;
  }


 idNoExiste() {
    this.toastr.warning('Id no existe', 'Advertencia');
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


  buscarLibros(idinsertado: HTMLInputElement) {
    let id = Number.parseInt(idinsertado.value);
    
    if (id) {
      let libro = this.bookService.getOne(id);
      if (libro) {
        return [libro]; // Devuelve un array con el libro si se encontró
      } else {
        this.idNoExiste(); // Llama al método para mostrar la notificación
        return []; // Devuelve un array vacío si no se encontró el libro
      }
    } else {
      return this.bookService.getAll(); // Si el campo de búsqueda está vacío, muestra todos los libros
    }
  }



  // Condicional ternario: condición ? valorSiVerdadero : valorSiFalso;
  // libro ? [libro] : []; significa:

// Si libro existe (es un objeto válido), devuelve un array que contiene ese libro.
// Si libro no existe (es undefined o null), devuelve un array vacío.

// equivale a esto: if (libro) {
//   return [libro]; // Devuelve un array con el libro si se encontró
// } else {
//   return []; // Devuelve un array vacío si no se encontró el libro
// }

parseInputToNumber(value: string): number {
  return parseInt(value, 10); // Asegúrate de especificar la base 10
}
}



