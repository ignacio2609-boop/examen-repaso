import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormComponent } from '../../components/form/form.component';
import { ListComponent } from '../../components/list/list.component';
import { Alumno } from '../../components/list/alumno.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent,
    FormComponent,
    ListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

alumno: Alumno[] = []
  
addAlumno(alumno: any) {
  console.log("Funciona evento!!", alumno);
this.alumno.push(alumno);
}

}
