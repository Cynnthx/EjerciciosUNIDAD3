import { Component } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana1',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana1.component.html',
  styleUrl: './interaccion-ventana1.component.css'
})
export class InteraccionVentana1Component {
  nuevaVentana: Window | null = null;
  resolucion: string = '';

  abrirVentana() {
    this.nuevaVentana =
      window.open('', '', 'width=400, height=400');

    this.actualizarResolucion();
  }

  redimensionarVentana(ancho: number, alto: number) {
    if (this.nuevaVentana){
      this.nuevaVentana.resizeTo(ancho, alto);
      this.actualizarResolucion();
    }
  }

  actualizarResolucion(){
    if (this.nuevaVentana){
      this.resolucion =
        `Ancho: ${this.nuevaVentana.innerWidth}, Alto:
        ${this.nuevaVentana.innerHeight}`;
    }
  }
}
