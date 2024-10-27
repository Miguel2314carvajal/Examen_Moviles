import { Component } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  newText: string = ''; // Variable para el texto nuevo que se va a agregar

  constructor(public textService: TextService) {}

  addTextToStorage() {
    if (this.newText.trim().length > 0) {
      this.textService.addNewText(this.newText);
      this.newText = ''; // Limpiar el campo de entrada
    }
  }

  async ngOnInit() {
    await this.textService.loadSavedTexts(); // Cargar los textos guardados al iniciar
  }
}
