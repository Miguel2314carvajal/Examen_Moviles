import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isAlertOpen = false;
  alertHeader: string = '';  
  alertSubHeader: string = ''; 
  alertMessage: string = '';
    

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  abrirPopup(tipo: string) {
    switch (tipo) {
      case 'document':
        this.alertHeader = 'Hobbys';
        this.alertSubHeader = 'Deportes Favoritos';
        this.alertMessage = 'Futbol, Basket, Futsala, KickBoxing, Boxeo';
        break;
      case 'color-palette':
        this.alertHeader = 'Colores Favoritos';
        this.alertSubHeader = 'Selección de colores';
        this.alertMessage = 'Azul, Rojo y Negro';
        break;
      case 'globe':
        this.alertHeader = 'Lugares';
        this.alertSubHeader = 'Mis favoritos';
        this.alertMessage = 'Parques Botanicos, Volcanes, Montañas';
        break;
    }
    this.setOpen(true);
  }
  

  constructor() {
    
  }

}
