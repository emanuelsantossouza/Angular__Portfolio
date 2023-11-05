import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifilio';
  homeMenu: boolean = true;


  ngDoCheck() {
    this.mudarMenu();
  }

  mudarMenu() {
    if (localStorage.getItem('menuHome') == 'light') {
      this.homeMenu = true;
    } else {
      this.homeMenu = false;
    }
  }
}
