import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() bannerClicked = new EventEmitter();
  navList = [
    'Nuestro Centro',
    'Profesores',
    'Servicios',
    'Orientación',
    'Departamentos',
    'Actividades y proyectos',
    'AMPA',
    'Contacto'
  ];
}
