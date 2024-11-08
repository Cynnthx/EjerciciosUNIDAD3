import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-imagen',
  standalone: true,
  template: `
    <h1 mat-dialog-title>{{data.descripcion}}</h1>
    <div mat-dialog-content>
      <img [src]="data.url" alt="{{data.descripcion}}" style="width: 100%;">
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cerrar</button>
    </div>
  `
})
export class DialogoImagenComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
