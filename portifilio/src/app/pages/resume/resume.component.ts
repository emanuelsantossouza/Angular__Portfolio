import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  menuResume!: string
  bigTextResume: string = 'Resumo';

  bigTextSubComponent: string = 'Habilidades';
  categoriaSubComponent: string = 'Tecnologias';
  titleLegendCompenent: string = 'C#';
  smallTextDescribeComponent: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vero eum autem, esse sapiente dicta quibusdam adipisci dignissimos atque dolores consequuntur eaque quisquam! Nam doloremque illum sed laborum reprehenderit ab.';

  bigTextVazio:string = ' ';
  ngOnInit() {
    this.menuResume = 'light';
    localStorage.setItem('menuResume', String(this.menuResume));
  }
  ngOnDestroy() {
    this.menuResume = 'dark';
    localStorage.setItem('menuResume', String(this.menuResume));
  }
}
