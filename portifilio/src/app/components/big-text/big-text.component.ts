import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-text',
  templateUrl: './big-text.component.html',
  styleUrls: ['./big-text.component.scss']
})
export class BigTextComponent {
  @Input()
  bigText!: string;
}
