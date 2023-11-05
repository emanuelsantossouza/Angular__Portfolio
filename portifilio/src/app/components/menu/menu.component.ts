import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  Map = new Map([
    ['MapMenuHome', "light"],
    ['MapMenuAboutMe', "dark"],
    ['MapMenuResume', "dark"],
    ['MapMenuPortfolio', "dark"],
    ['MapMenuContact', "dark"],
    ['MapMenuProvaSocial', "dark"],
  ]);

  ngOnDestroy() {
    localStorage.clear();
  }

  ngDoCheck() {
    this.menuActiveToogle();
  }

  menuActiveToogle() {
    this.testMenuActive('MapMenuHome', 'menuHome');
    this.testMenuActive('MapMenuAboutMe', 'menuAbouteMe')
    this.testMenuActive('MapMenuResume', 'menuResume')
    this.testMenuActive('MapMenuPortfolio', 'menuPortfolio')
    this.testMenuActive('MapMenuContact', 'menuContact')
    this.testMenuActive('MapMenuProvaSocial', 'menuProvaSocial')
  }

  testMenuActive(nameComponentMenu: string, valueComponentMenu: string) {
    this.Map.set(nameComponentMenu, String(localStorage.getItem(valueComponentMenu)))
  }
}

