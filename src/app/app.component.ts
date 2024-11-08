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
import {Ejercicio2Component} from './ejercicio2/ejercicio2.component';
import {Ejercicio3Component} from './ejercicio3/ejercicio3.component';
import {Ejercicio4Component} from './ejercicio4/ejercicio4.component';
import {Ejercicio5Component} from './ejercicio5/ejercicio5.component';
import {Ejercicio6Component} from './ejercicio6/ejercicio6.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaYHoraActualComponent,
    NumerosAleatoriosComponent, NavegacionHistorialComponent,
    InteraccionVentana1Component, InteraccionVentana2Component,
    ManipulacionCookiesComponent, SaludoUsuarioComponent,
    Ejercicio1Component, Ejercicio2Component,
    Ejercicio3Component, Ejercicio4Component,
    Ejercicio5Component, Ejercicio6Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'EjerciciosUnidad3, ';
}
