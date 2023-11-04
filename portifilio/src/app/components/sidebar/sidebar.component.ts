import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  fotoDePerfil = '../../../assets/img/fotoPerfil.jpg';

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


  chagendMenuActive() {
    this.isMenuHomeActive = this.testActiveMenu('menuHome');
    this.isMenuAbouteMeActive = this.testActiveMenu('menuAbouteMe');
    this.isMenuProvaSocial = this.testActiveMenu('menuProvaSocial');
    this.isMenuPortfolio = this.testActiveMenu('menuPortfolio');
    this.isMenuContact = this.testActiveMenu('menuContact');
    this.isMenuResumeActive = this.testActiveMenu('menuResume');

    console.log("Clicou aquii")
    console.log(this.isMenuHomeActive)
    console.log(this.isMenuAbouteMeActive)
    console.log(this.isMenuProvaSocial)
    console.log(this.isMenuPortfolio)
    console.log(this.isMenuContact)
  }

  ngOnInit() {
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
