import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {

  createEmpleado: FormGroup;
  subbmited = false;

  //inyectamos la clase FormsBuilder para construir form reactivos
  // Inyectamos el servicio EmpleadoService
  constructor(private fb: FormBuilder,
              private empleadoService: EmpleadoService) {

    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      salario: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  agregarEmpleado() {

    this.subbmited = true;

    if(this.createEmpleado.invalid) {
      return;
    }

    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      documento: this.createEmpleado.value.documento,
      salario: this.createEmpleado.value.salario,
      fechaCreacion :  new Date(),
      fechaActualizacion: new Date()

    }
    // se llama el servicio y se le pasa el objeto empleado
    // es una promesa y por tanto se utiliza el then con un arrow Función
    this.empleadoService.agregarEmpleado(empleado)
      .then(() => console.log('Empleado Registrado '))
      .catch(error => console.log(error));

  }

}
