import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',  // Cambiado a 'app-confirm-dialog' para seguir una convención
  template: `
    <h1 mat-dialog-title>Confirmar Eliminación</h1>
    <div mat-dialog-content>¿Estás seguro de que quieres eliminar este contacto?</div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-button color="warn" (click)="onConfirm()">Eliminar</button>
    </div>
  `
})
export class ConfirmDialog{
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
