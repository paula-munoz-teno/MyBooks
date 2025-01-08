import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url: string = 'http://localhost:3000'; // Cambia esto a la URL de tu API
  public logueado: boolean = false; // Inicializado como false
  public user: User | null = null; // Almacena los datos del usuario conectado

  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo usuario
  register(user: User): Observable<any> {
    return this.http.post(`${this.url}/registro`, user);
  }

  // Método para iniciar sesión
  login(user: User): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }

  // Método para establecer el estado de inicio de sesión
  setLoggedIn(user: User) {
    this.logueado = true;
    this.user = user;
  }

  // Método para cerrar sesión
  logout() {
    this.logueado = false;
    this.user = null;
  }
}