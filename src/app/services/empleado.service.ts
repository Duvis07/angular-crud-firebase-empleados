import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Inyección de AngularFirestore
  constructor(private firestore: AngularFirestore) { }

  agregarEmpleado(empleado : any) : Promise<any> {

    // se llama la inyección de angularFiresStore
    // se crea una collection con el nombre en string
    // se agrega el objeto que recibe el método
    return this.firestore.collection('empleados').add(empleado)
  }

}
