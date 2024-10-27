import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fechaInicio: string | null = null;
  fechaFin: string | null = null;
  diferenciaDias: number | null = null;

  constructor() {}

  calcularDiferencia() {
    if (this.fechaInicio && this.fechaFin) {
      const inicio = new Date(this.fechaInicio);
      const fin = new Date(this.fechaFin);
      
      const diferenciaMs = Math.abs(fin.getTime() - inicio.getTime());
      this.diferenciaDias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
    } else {
      this.diferenciaDias = null;
    }
  }

}
