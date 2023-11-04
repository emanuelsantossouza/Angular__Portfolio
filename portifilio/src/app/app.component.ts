import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifilio';
  homeMenu: boolean = false;


  mudarMenu() {
    if (localStorage.getItem('menuHome') == 'light') {
      this.homeMenu = true;
    } else {
      this.homeMenu = false;
    }
    console.log(this.homeMenu);
    this.trocarMenuLateral();
  }

  trocarMenuLateral() {
    console.log("Trocando cor do me")
  }
}
