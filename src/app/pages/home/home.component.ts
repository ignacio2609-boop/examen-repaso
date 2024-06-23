import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormComponent } from '../../components/form/form.component';



import { CommonModule } from '@angular/common';
import { Alumno } from './alumno.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent,
    FormComponent,
    CommonModule,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  disable: any;
  disabledButtons: { [key: string]: boolean } = {};
  alumnos: Alumno[] = [
    { nombre: "Juan", apellidos: "Pérez Gómez", dni: "12345678A", telefono: "612345678"},
    { nombre: "María", apellidos: "Rodríguez Sánchez", dni: "87654321X", telefono: "678901234" },
    { nombre: "Carlos", apellidos: "Fernández Díaz", dni: "11223344A", telefono: "712345678" }
  ];
// Función añadir alumno
addAlumno(alumno: any) {
  console.log("Funciona evento!!", alumno, alumno.dni);
  this.alumnos.push(alumno);
  }
// Función eliminar alumno
  deleteAlumno(alumno: any) {
    console.log("Funciona delete!!", alumno, alumno.dni);
    for (var i = 0; i < this.alumnos.length; i++) {
      if (alumno.dni == this.alumnos[i].dni) {
        this.alumnos.splice(i, 1);
        i = this.alumnos.length;
      }
    }
  }
// Función para marcar como presente
  presente(alumno: Alumno) {
    this.disabledButtons[alumno.dni] = true;
    }
}
