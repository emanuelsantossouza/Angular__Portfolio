import { Component } from '@angular/core';

@Component({
  selector: 'app-prova-social',
  templateUrl: './prova-social.component.html',
  styleUrls: ['./prova-social.component.scss']
})
export class ProvaSocialComponent {

  menuProvaSocial!: string;
  bigTextProvaSocial:string = 'Prova Social';

  ngOnInit() {
    this.menuProvaSocial = 'light';
    localStorage.setItem('menuProvaSocial', this.menuProvaSocial);
  }
  ngOnDestroy() {
    this.menuProvaSocial = 'dark';
    localStorage.setItem('menuProvaSocial', this.menuProvaSocial);
  }
}
