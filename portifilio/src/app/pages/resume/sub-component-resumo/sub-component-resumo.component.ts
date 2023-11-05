import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-component-resumo',
  templateUrl: './sub-component-resumo.component.html',
  styleUrls: ['./sub-component-resumo.component.scss']
})
export class SubComponentResumoComponent {
  @Input()
  Bigtitle!: string;

  @Input()
  categoria: string='';

  @Input()
  titleLegend: string='';

  @Input()
  smallTextDescribe: string ='';
}
