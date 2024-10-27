import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  public texts: UserText[] = [];
  private TEXT_STORAGE: string = 'texts';

  constructor() {}

  // Método para guardar un nuevo texto en el almacenamiento
  public async addNewText(content: string) {
    // Generar un nombre de archivo único usando la fecha actual
    const fileName = Date.now() + '.txt';

    // Guardar el archivo en el sistema de archivos
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: content,
      directory: Directory.Data, // Usar Directory.Data para almacenar el archivo de texto
      encoding: Encoding.UTF8
    });

    // Agregar el texto a la lista en memoria con la ruta del archivo
    const newText: UserText = {
      filepath: fileName,
      content: content
    };
    this.texts.unshift(newText);

    // Actualizar el almacenamiento local con la nueva lista de textos
    Preferences.set({
      key: this.TEXT_STORAGE,
      value: JSON.stringify(this.texts),
    });
  }

  // Método para cargar los textos guardados desde el almacenamiento
  public async loadSavedTexts() {
    // Obtener la lista de textos guardados desde Preferences
    const { value } = await Preferences.get({ key: this.TEXT_STORAGE });
    this.texts = (value ? JSON.parse(value) : []) as UserText[];

    for (let text of this.texts) {
        // Leer el contenido del archivo
        const readFile = await Filesystem.readFile({
          path: text.filepath,
          directory: Directory.Documents,
          encoding: Encoding.UTF8 // Asegúrate de que el encoding sea UTF8
        });
        // Guardar el contenido en el objeto
        text.content = readFile.data as string; // Agrega 'as string' para indicar que es texto
      }
  }
}

// Definición de la interfaz UserText
export interface UserText {
  filepath: string;
  content: string;
}
