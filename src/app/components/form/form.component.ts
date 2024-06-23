import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alumno } from '../../pages/home/alumno.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() formEvent = new EventEmitter();
  alumnoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required]
    })
  }
  alumnos: Alumno[] = [];
  sendAlumno(){
    if(this.alumnoForm.valid) {
      console.log("Funciona!!", this.alumnoForm.value)
      const nuevoAlumno: Alumno =  {
        nombre: this.alumnoForm.value.nombre,
        apellidos: this.alumnoForm.value.apellidos,
        dni: this.alumnoForm.value.dni,
        telefono: this.alumnoForm.value.telefono,
        }
      this.formEvent.emit(nuevoAlumno);
      this.alumnoForm.reset();
    } else {
      console.log('Formulario no válido');
    }
  }
}
