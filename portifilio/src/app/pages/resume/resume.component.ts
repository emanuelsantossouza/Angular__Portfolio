import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  menuResume!: string
  bigTextResume: string = 'Resumo';
  
  ngOnInit() {
    this.menuResume = 'light';
    localStorage.setItem('menuResume', String(this.menuResume));
  }
  ngOnDestroy() {
    this.menuResume = 'dark';
    localStorage.setItem('menuResume', String(this.menuResume));
  }
}
