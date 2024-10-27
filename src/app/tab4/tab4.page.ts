import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  raiz1: number | null = null;
  raiz2: number | null = null;
  mensaje: string = '';

  calcularRaices() {
    const discriminante = Math.pow(this.b, 2) - 4 * this.a * this.c;

    if (discriminante > 0) {
      
      this.raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.mensaje = '';
    } else if (discriminante === 0) {
      
      this.raiz1 = this.raiz2 = -this.b / (2 * this.a);
      this.mensaje = '';
    } else {
      
      this.raiz1 = null;
      this.raiz2 = null;
      this.mensaje = 'No hay raíces reales para los valores ingresados.';
    }
  }
}


