import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent  {
  menuAboutMe!: string;
  bigText = 'Sobre mim'

  ngOnInit() {
    this.menuAboutMe = 'light';
    localStorage.setItem('menuAbouteMe', String(this.menuAboutMe));
  }

  ngOnDestroy() {
    this.menuAboutMe = 'dark'
    localStorage.setItem('menuAbouteMe', String(this.menuAboutMe));
  }
}
