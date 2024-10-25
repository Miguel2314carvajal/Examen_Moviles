import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pizza } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isAlertOpen = false;
  alertHeader: string = '';  
  alertSubHeader: string = ''; 
  alertMessage: string = '';  

  constructor() {

    addIcons({ pizza });
  }

  irAGithub() {
    window.open('https://github.com/frevill0', '_blank'); 
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
      case 'skills':
        this.alertHeader = 'Mis Habilidades';
        this.alertSubHeader = 'Áreas de especialización';
        this.alertMessage = 'Destaco en el desarrollo de software, trabajo en equipo, resolución de problemas y aprendizaje continuo.';
        break;
      case 'experience':
        this.alertHeader = 'Experiencia Laboral';
        this.alertSubHeader = 'Mi trayectoria profesional';
        this.alertMessage = 'He trabajado como mesero en La Salerosa, técnico en el ECU 911, y actualmente soy desarrollador en el Quito Tennis & Golf Club, donde participo en el diseño y desarrollo de soluciones tecnológicas.';
        break;
      case 'education':
        this.alertHeader = 'Mi Educación';
        this.alertSubHeader = 'Formación académica';
        this.alertMessage = 'Soy estudiante de Tecnología Superior en Desarrollo de Software en la Escuela Politécnica Nacional, con un enfoque en la creación de soluciones innovadoras.';
        break;
    }
    this.setOpen(true);
  }
}
