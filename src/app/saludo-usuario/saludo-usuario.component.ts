import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-saludo-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saludo-usuario.component.html',
  styleUrl: './saludo-usuario.component.css'
})
export class SaludoUsuarioComponent implements OnInit{

  usuarioNombre: string | null = null; // Variable para almacenar el nombre del usuario

  constructor() { }

  ngOnInit() {
    this.obtenerNombreUsuario(); // Llama a la función al inicializar el componente
  }

  obtenerNombreUsuario() {
    const nombreGuardado = this.leerCookie('nombreUsuario'); // Intenta leer la cookie
    if (nombreGuardado) {
      this.usuarioNombre = nombreGuardado; // Si la cookie existe, usa su valor
    } else {
      this.pedirNombreUsuario(); // Si no, pide el nombre al usuario
    }
  }

  pedirNombreUsuario() {
    const nombre = prompt('Por favor, introduce tu nombre:'); // Solicita el nombre
    if (nombre) {
      this.usuarioNombre = nombre; // Guarda el nombre en la variable
      this.guardarCookie('nombreUsuario', nombre, 1); // Guarda el nombre en una cookie por 1 día
    }
  }

  guardarCookie(nombre: string, valor: string, dias: number) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000)); // Calcula la fecha de expiración
    const expires = "expires=" + fecha.toUTCString(); // Formatea la fecha
    document.cookie = `${nombre}=${valor};${expires};path=/`; // Crea la cookie
  }

  leerCookie(nombre: string): string | null {
    const nombreEQ = `${nombre}=`;
    const partes = document.cookie.split(';'); // Divide las cookies en un array
    for (let i = 0; i < partes.length; i++) {
      let c = partes[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Elimina espacios en blanco
      if (c.indexOf(nombreEQ) === 0) return c.substring(nombreEQ.length, c.length); // Devuelve el valor de la cookie
    }
    return null; // Si no se encuentra, retorna null
  }
}
