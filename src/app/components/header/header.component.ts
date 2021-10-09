import { Component } from '@angular/core';

@Component({
  selector: 'gl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
