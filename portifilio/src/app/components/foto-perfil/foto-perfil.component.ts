import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.scss']
})
export class FotoPerfilComponent {
  @Input()
  imgCard: string = '';
}
