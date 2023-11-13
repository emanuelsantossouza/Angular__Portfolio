import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fotoDePerfil = '../../../assets/img/fotoPerfil.png';

  menuHome!: string;

  ngOnInit() {
    this.menuHome = 'light';
    localStorage.setItem('menuHome', String(this.menuHome));
  }
  ngOnDestroy() {
    this.menuHome = 'dark';
    localStorage.setItem('menuHome', String(this.menuHome));
  }
}
