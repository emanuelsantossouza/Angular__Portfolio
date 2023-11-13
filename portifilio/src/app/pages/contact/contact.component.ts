import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  menuContact!: string;
  bitTextContact: string = 'Contato';

  ngOnInit() {
    this.menuContact = 'light';
    localStorage.setItem('menuContact', String(this.menuContact));
  }

  ngOnDestroy() {
    this.menuContact = 'dark';
    localStorage.setItem('menuContact', String(this.menuContact));
  }
}
