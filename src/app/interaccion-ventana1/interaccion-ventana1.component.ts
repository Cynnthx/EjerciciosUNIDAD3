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
    const width = 400;
    const height = 400;
    const adjustedWidth = width + (window.outerWidth - window.innerWidth);
    const adjustedHeight = height + (window.outerHeight - window.innerHeight);

    this.nuevaVentana = window.open('', '', `width=${adjustedWidth},height=${adjustedHeight}`);
    this.nuevaVentana?.addEventListener('load', () => {
      this.nuevaVentana?.resizeTo(width, height);
      this.actualizarResolucion();
    });

    this.nuevaVentana?.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
    });
  }

  redimensionarVentana(ancho: number, alto: number) {
    if (this.nuevaVentana) {
      const adjustedWidth = ancho + (window.outerWidth - window.innerWidth);
      const adjustedHeight = alto + (window.outerHeight - window.innerHeight);

      this.nuevaVentana.resizeTo(adjustedWidth, adjustedHeight);
      this.nuevaVentana.addEventListener('resize', () => {
        this.nuevaVentana?.resizeTo(ancho, alto);
        this.actualizarResolucion();
      });
    }
  }

  actualizarResolucion() {
    if (this.nuevaVentana) {
      this.resolucion = `Ancho: ${this.nuevaVentana.innerWidth}, Alto: ${this.nuevaVentana.innerHeight}`;
    }
  }
}
