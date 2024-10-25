import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pizza } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isAlertOpen = false;
  alertHeader: string = '';  
  alertSubHeader: string = ''; 
  alertMessage: string = '';  

  constructor() {

    addIcons({ pizza });
  }

  irAGithub() {
    window.open('https://github.com/Miguel2314carvajal', '_blank'); 
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete()
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
}
