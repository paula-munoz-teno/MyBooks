import { Component, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() BooksHijo:Book[];  
//puedo utilizarlo en la vista ya que es público 
// @Output() eventoBooks  = new EventEmitter<Book[]>();

  
//creo array de libros 

  constructor(){}
  

ngOnInit():void
  {}


  // eliminar(){}



  // enviar(input1: HTMLInputElement, input2: HTMLInputElement, input3: HTMLInputElement, input4: HTMLInputElement,
  //   input5: HTMLInputElement, input6: HTMLInputElement, input7: HTMLInputElement) {

  //   // Crear un nuevo libro con los valores de los inputs
  //   this.Books[this.Books.length] = new Book(
  //     parseInt(input1.value), // id_book
  //     parseInt(input2.value), // id_user
  //     input3.value,           // title
  //     input4.value,           // type
  //     input5.value,           // author
  //     parseFloat(input6.value),// price
  //     input7.value            // photo
  //   );

  

  //   }

}



