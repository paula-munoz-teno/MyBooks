import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


// ¿Cuándo se utiliza ngOnInit()?
// Inicialización de datos: Es común usar ngOnInit() para inicializar datos, como cargar información desde un servicio, establecer valores predeterminados o hacer cualquier configuración necesaria antes de que el componente sea renderizado en la vista.
// Llamadas a servicios: Si necesitas hacer una llamada a un servicio para obtener datos cuando el componente se carga, ngOnInit() es el lugar adecuado para hacerlo.

export class BooksComponent implements OnInit

{
  public Books : Book[];
  
  
//creo array de libros 

  constructor()
  {
    // this.Books=[];
    this.Books = [
      //creo libros
      new Book(22222, 22221, "Un verso suelto", "Tapa Blanda", "Use Lahoz", 15 , "assets/img/L1.jpg"),
      new Book(33333, 33331, "Carol", "Tapa Blanda", "Patricia Highsmith", 18 , "assets/img/L2carol.jpeg"),
      new Book(44444, 44441, "Los siete Maridos de Evelyn Hugo", "Tapa Blanda", "Taylor Jekkins Reid", 20 , "assets/img/L3.webp")
  
    ]     
    // this.Books[3] = {id_user:; id_book: title:"",   }
   
  }

ngOnInit():void
  {}



  enviar(input1: HTMLInputElement, input2: HTMLInputElement, input3: HTMLInputElement, input4: HTMLInputElement,
    input5: HTMLInputElement, input6: HTMLInputElement, input7: HTMLInputElement) {

    // Crear un nuevo libro con los valores de los inputs
    this.Books[this.Books.length] = new Book(
      parseInt(input1.value), // id_book
      parseInt(input2.value), // id_user
      input3.value,           // title
      input4.value,           // type
      input5.value,           // author
      parseFloat(input6.value),// price
      input7.value            // photo
    );

  

    }

  // enviar(input1:HTMLInputElement, input2:HTMLInputElement, input3:HTMLInputElement, input4:HTMLInputElement,
  // input5:HTMLInputElement, input6:HTMLInputElement, input7:HTMLInputElement)
  // { this.Books[3].id_book = parseInt(input1.value),                    
  //   this.Books[3].id_user = parseInt(input2.value),
  //   this.Books[3].title = input3.value,
  //   this.Books[3].type = input4.value,
  //   this.Books[3].author = input5.value,
  //   this.Books[3].price = parseInt(input6.value)
  //   this.Books[3].photo = input7.value
  // }
  
// agregarlibro(){

//     this.Books.push(this.Books[3])
//       }

     
  // agregarLibro() {
  //   // Este método no tiene sentido tal como está. 
  //   // Asumiré que deseas agregar un nuevo libro, pero no tienes un libro definido para agregar.
  //   // Por ahora, vamos a agregar un libro de ejemplo.
  //   const nuevoLibro = new Book(55555, 55551, "Nuevo Libro", "Tapa Dura", "Autor Desconocido", 25, "assets/img/L4.jpg");
  //   this.Books.push(nuevoLibro);
  // }

  // enviar(input1: HTMLInputElement, input2: HTMLInputElement, input3: HTMLInputElement, input4: HTMLInputElement,
  //   input5: HTMLInputElement, input6: HTMLInputElement, input7: HTMLInputElement) {

  //   // Crear un nuevo libro con los valores de los inputs
  //   const nuevoLibro = new Book(
  //     parseInt(input1.value), // id_book
  //     parseInt(input2.value), // id_user
  //     input3.value,           // title
  //     input4.value,           // type
  //     input5.value,           // author
  //     parseFloat(input6.value),// price
  //     input7.value            // photo
  //   );

  //   console.log(nuevoLibro);

  //   }
// enviar(input1:HTMLInputElement, input2:HTMLInputElement, input3:HTMLInputElement, input4:HTMLInputElement,
//   input5:HTMLInputElement, input6:HTMLInputElement, input7:HTMLInputElement)
//   { this.Books[0].id_book = input1.value                    ,
//     this.Books[0].id_user = input2.value,
//     this.Books[0].title = input3.value,
//     this.Books[0].type = input4.value,
//     this.Books[0].author = input5.value,
//     this.Books[0].price = input6.value
//     this.Books[0].photo = input7.value
//   }


  }
