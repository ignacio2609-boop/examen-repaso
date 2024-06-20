import { Component, Input } from '@angular/core';
import { Alumno } from './alumno.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  alumnos: Alumno[] = [
    { nombre: "Juan", apellidos: "Pérez Gómez", dni: "12345678A", telefono: "612345678"},
    { nombre: "María", apellidos: "Rodríguez Sánchez", dni: "87654321X.", telefono: "678901234" },
    { nombre: "Carlos", apellidos: "Fernández Díaz", dni: "11223344A", telefono: "712345678" }
  ];

  @Input() alumnosInput: any
  
}
