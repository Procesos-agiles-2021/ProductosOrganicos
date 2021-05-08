import { Injectable } from '@angular/core';
import { Model } from './client';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  model: Model;
  register: Register;

  constructor() {

    this.model = {
      roles: [
        { id: 1, nombre: "Cliente" },
        { id: 2, nombre: "Productor" }
      ]
    };

    this.register = {
      rol: this.model.roles[0],
    }

  }


}
