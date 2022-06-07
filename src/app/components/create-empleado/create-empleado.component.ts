import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {

  createEmpleado: FormGroup;
  subbmited = false;
  loading = false;

  //inyectamos la clase FormsBuilder para construir form reactivos
  // Inyectamos el servicio EmpleadoService
  // Inyectamos el Router para navegar entre rutas desde TS
  constructor(private fb: FormBuilder,
              private empleadoService: EmpleadoService,
              private router: Router) {

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

    // Activa el spinner
    this.loading = true;


    // se llama el servicio y se le pasa el objeto empleado
    // es una promesa y por tanto se utiliza el then con un arrow Función
    this.empleadoService.agregarEmpleado(empleado)
      .then(() => {

        this.loading = false;
        alert('Empleado Registrado con éxito')
        
        // llamamos el router y el método navigate y le pasamos la ruta a donde queremos ir
        this.router.navigate(['/list-empleados'])

      })
      .catch(error => {
        alert(error)
        this.loading = false;
      });

  }

}
