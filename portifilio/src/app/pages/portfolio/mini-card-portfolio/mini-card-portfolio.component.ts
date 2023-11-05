import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card-portfolio',
  templateUrl: './mini-card-portfolio.component.html',
  styleUrls: ['./mini-card-portfolio.component.scss']
})
export class MiniCardPortfolioComponent {
  @Input()
  img: string = ''; 
}
