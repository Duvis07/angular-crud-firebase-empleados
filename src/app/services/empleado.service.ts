import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Inyección de AngularFirestore
  constructor(private firestore: AngularFirestore) { }


  // Servicio que agrega un empleado
  agregarEmpleado(empleado : any) : Promise<any> {

    // se llama la inyección de angularFiresStore
    // se crea una collection con el nombre en string
    // se agrega el objeto que recibe el método
    return this.firestore.collection('empleados').add(empleado)
  }

  // Servicio que obtiene todos los datos de firebase
  getEmpleados(): Observable<any> {
    // llamamos a la inyección firestore y al método snapshotChanges el cual Cree una secuencia de cambios sincronizados. Este método mantiene la matriz local en el orden de consulta ordenado. devuelve un observable
    return this.firestore.collection('empleados').snapshotChanges();
  }

}
