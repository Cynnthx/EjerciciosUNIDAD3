import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaYHoraActualComponent} from './fecha-yhora-actual/fecha-yhora-actual.component';
import {NumerosAleatoriosComponent} from './numeros-aleatorios/numeros-aleatorios.component';
import {NavegacionHistorialComponent} from './navegacion-historial/navegacion-historial.component';
import {InteraccionVentana1Component} from './interaccion-ventana1/interaccion-ventana1.component';
import {InteraccionVentana2Component} from './interaccion-ventana2/interaccion-ventana2.component';
import {ManipulacionCookiesComponent} from './manipulacion-cookies/manipulacion-cookies.component';
import { SaludoUsuarioComponent } from './saludo-usuario/saludo-usuario.component';
import {Ejercicio1Component} from './ejercicio1/ejercicio1.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaYHoraActualComponent,
    NumerosAleatoriosComponent, NavegacionHistorialComponent,
    InteraccionVentana1Component, InteraccionVentana2Component,
    ManipulacionCookiesComponent, SaludoUsuarioComponent,
    Ejercicio1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'EjerciciosUnidad3, ';
}
