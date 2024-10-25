import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {


  }

  irAGithub() {
    window.open('https://github.com/Miguel2314carvajal', '_blank'); 
  }

}
