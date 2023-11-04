import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  menuPortfolio!: string;
  bigTextPortfolio: string = 'Portfolio';

  portfolioMenuComponents = new Map([
    ['all', true],
    ['design', false],
    ['programacaoWeb', false],
    ['mobile', false]
  ]
  );


  ngOnInit() {
    this.menuPortfolio = 'light';
    localStorage.setItem('menuPortfolio', String(this.menuPortfolio));
  }
  ngOnDestroy() {
    this.menuPortfolio = 'dark';
    localStorage.setItem('menuPortfolio', String(this.menuPortfolio));
  }

  portfolioMenuActiveClick(nameComponentPorfolioMenu: string) {
    this.portfolioMenuComponents.clear();
    this.portfolioMenuComponents.set(nameComponentPorfolioMenu, true);
  }
}
