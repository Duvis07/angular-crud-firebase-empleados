import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  // items: Observable<any[]>;

  // firestore: AngularFirestore (injectado en el constructor)
  // this.items = firestore.collection('items').valueChanges() --> (dentro de llaves constructor)

  empleados: any[] = [];

  // Inyectamos el servicio EmpleadoService
  constructor(private empleadoService :  EmpleadoService) {

   }

  ngOnInit(): void {
    this.getEmpleados();
  }

  // este método lo utilizaremos cuando se inicialice el componente por tanto lo llamamos en el ngOnInit()
  getEmpleados(){
    // al utilizar el servicio es un observable por tanto nos suscribimos
    this.empleadoService.getEmpleados()
      .subscribe(data => {
        data.forEach((element:any) => {
          // element.payload.doc.id --> obtiene el id de los elementos en firebase
          //element.payload.doc.data() --> obtiene los datos completos de firebase
          // console.log(element.payload.doc.data())

          // se guarda en empleados[]
          this.empleados.push({
            id: element.payload.doc.id, //le agregamos el id en una variable nueva
            ...element.payload.doc.data(), //con sprint-operator concatemos el id con data
          })
        });
      });
      console.log(this.empleados)
  }

}
