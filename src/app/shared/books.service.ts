//es una clase de tyscript como los modelos, los controladores de los componentes y el pipe 
//este es mi tablón (los componentes rellenarán y leerán info)

import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService 
{

  private  books: Book[] = [
  new Book("Un verso suelto", "Tapa Blanda", "Use Lahoz", 15, "assets/img/L1.jpg", 22222, 22221),
  new Book("Carol", "Tapa Blanda", "Patricia Highsmith", 18, "assets/img/L2carol.jpeg", 33333, 33331),
  new Book("Los siete Maridos de Evelyn Hugo", "Tapa Blanda", "Taylor Jenkins Reid", 20, "assets/img/L3.webp", 44444, 44441)
];
  //dar valor a array vacío

  constructor() {}
public getAll():Book[] {
return this.books;
}

public getOne(id_book: number): Book {
  // Busca el libro en el array de libros por su id
  return this.books.find(book => book.id_book === id_book);
}

public add(book:Book):void{
  this.books.push(book)
}

public edit(book: Book): boolean {
  // Busca el índice del libro que se desea editar
  const index = this.books.findIndex(b => b.id_book === book.id_book);
  
  // Si el libro no se encuentra, devuelve false
  if (index === -1) {
    return false;
  }

  // Actualiza el libro en el índice encontrado
  this.books[index] = book;

  // Devuelve true indicando que la edición fue exitosa
  return true;
}



public delete(id_book: number): boolean {
  console.log(this.books)
  const initialLength = this.books.length; // Longitud inicial del array de libros
  this.books = this.books.filter(book => book.id_book !== id_book); // Filtra los libros que no coinciden con el id_book
  console.log(this.books)
  return this.books.length < initialLength; // Devuelve true si se eliminó al menos un libro
}





}






//si son públicos permiten: 
//-acceder a datos (leen anuncios)
//-modificar datos (pongan anuncios)


//formulario añadir libros -->meten los datos para crear libro  (este escribe en el tablón)
//books (front) --> mostrar esa información (este leea del tablón)


