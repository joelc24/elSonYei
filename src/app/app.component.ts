import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Error', url: '/folder/Error', icon: 'code' },
    { title: 'Pagina', url: '/folder/Pagina', icon: 'code-slash' },
    { title: 'Alterada', url: '/folder/Alterada', icon: 'cog' },
    { title: 'por', url: '/folder/por', icon: 'color-filter' },
    { title: 'su', url: '/folder/su', icon: 'color-wand' },
    { title: 'bienestar', url: '/folder/bienestar', icon: 'diamond' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  public personalizados = ['Estos', 'Son', 'labels', 'personalizados', 'por', 'elSonYei']
}
