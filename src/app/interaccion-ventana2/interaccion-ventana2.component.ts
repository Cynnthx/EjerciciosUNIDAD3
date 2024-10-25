import { Component } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana2',
  standalone: true,
  templateUrl: './interaccion-ventana2.component.html',
  styleUrls: ['./interaccion-ventana2.component.css']
})
export class InteraccionVentana2Component {
  private newWindow: Window | null = null;
  private position = { top: 100, left: 100 };
  private readonly moveDistance = 100;

  crearWindow() {
    if (!this.newWindow || this.newWindow.closed) {
      this.newWindow = window.open('', '', 'width=400,height=400');
      if (this.newWindow) {
        this.newWindow.document.write(`
          <html>
            <head>
              <title>Ventana Nueva</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                p { font-size: 16px; }
              </style>
            </head>
            <body>
              <p>Esta es una ventana nueva.</p>
            </body>
          </html>
        `);
        this.newWindow.moveTo(this.position.left, this.position.top);
      }
    } else {

      this.newWindow.focus();
    }
  }

  moverWindow(direction: string) {
    if (this.newWindow && !this.newWindow.closed) {
      switch (direction) {
        case 'up':
          this.position.top -= this.moveDistance;
          break;
        case 'down':
          this.position.top += this.moveDistance;
          break;
        case 'left':
          this.position.left -= this.moveDistance;
          break;
        case 'right':
          this.position.left += this.moveDistance;
          break;
      }
      this.newWindow.moveTo(this.position.left, this.position.top);
    }
  }
}
