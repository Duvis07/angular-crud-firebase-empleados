import { Component, OnInit } from '@angular/core';
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
  constructor() {

   }

  ngOnInit(): void {
  }

}
