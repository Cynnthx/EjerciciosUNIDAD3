import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaYHoraActualComponent} from './fecha-yhora-actual/fecha-yhora-actual.component';
import {NumerosAleatoriosComponent} from './numeros-aleatorios/numeros-aleatorios.component';
import {NavegacionHistorialComponent} from './navegacion-historial/navegacion-historial.component';
import {InteraccionVentana1Component} from './interaccion-ventana1/interaccion-ventana1/interaccion-ventana1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaYHoraActualComponent,
    NumerosAleatoriosComponent, NavegacionHistorialComponent,
    InteraccionVentana1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosUnidad3, ';
}
