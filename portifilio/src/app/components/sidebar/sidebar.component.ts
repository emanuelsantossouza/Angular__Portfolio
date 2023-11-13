import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  fotoDePerfil = '../../../assets/img/fotoPerfilSideBar.png';

  constructor() { }

  isMenuHomeActive: boolean = false;
  isMenuResumeActive: boolean = false;
  isMenuAbouteMeActive: boolean = true;
  isMenuProvaSocial: boolean = false;
  isMenuPortfolio: boolean = false;
  isMenuContact: boolean = false;

  menuAbouteMe = localStorage.getItem('menuAbouteMe');
  menuProvaSocial = localStorage.getItem('menuProvaSocial');
  menuResume = localStorage.getItem('menuResume');
  menuPortfolio = localStorage.getItem('menuPortfolio');
  menuContact = localStorage.getItem('menuContact');

  comeBackHome() {
    localStorage.setItem('menuHome', 'dark');
  }


  chagendMenuActive() {
    this.isMenuHomeActive = this.testActiveMenu('menuHome');
    this.isMenuAbouteMeActive = this.testActiveMenu('menuAbouteMe');
    this.isMenuProvaSocial = this.testActiveMenu('menuProvaSocial');
    this.isMenuPortfolio = this.testActiveMenu('menuPortfolio');
    this.isMenuContact = this.testActiveMenu('menuContact');
    this.isMenuResumeActive = this.testActiveMenu('menuResume');
  }

  ngDoCheck() {
    this.chagendMenuActive();
  }

  testActiveMenu(nameComponentMenu: string) {
    nameComponentMenu = String(localStorage.getItem(nameComponentMenu));
    if (nameComponentMenu == 'light') {
      return true;
    } else {
      return false;
    }
  }
}
