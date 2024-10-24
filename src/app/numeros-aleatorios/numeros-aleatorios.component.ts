import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-numeros-aleatorios',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './numeros-aleatorios.component.html',
  styleUrl: './numeros-aleatorios.component.css'
})
export class NumerosAleatoriosComponent {

  numerosAleatorios: number[] = [];

  generarNumerosAleatorios(cantidad:number){
    this.numerosAleatorios = [];

    for (let i = 0; i < cantidad; i++){
      const numero = Math.floor(Math.random() * 100) + 1;

      this.numerosAleatorios.push(numero);
    }
  }
}
