import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-yhora-actual',
  standalone: true,
  imports: [],
  templateUrl: './fecha-yhora-actual.component.html',
  styleUrl: './fecha-yhora-actual.component.css'
})
export class FechaYHoraActualComponent implements OnInit{
  fechaHoraActual: string;
  constructor() {
    this.fechaHoraActual = '';
  }
  ngOnInit() {
    this.actualizarFechaHora();
    setInterval(() =>
    this.actualizarFechaHora(), 1000);
  }

  actualizarFechaHora() {
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0'); // Asegura que el día tenga dos dígitos
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anyo = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    this.fechaHoraActual = `${dia}/${mes}/${anyo} ${horas}:${minutos}:${segundos}`;
  }

}
