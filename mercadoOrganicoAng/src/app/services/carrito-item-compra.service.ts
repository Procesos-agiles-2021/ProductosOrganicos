import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { ItemCompra } from '../models/itemcompra';
import { ShoppingCar } from '../models/ShoppingCar';
//import { DEPORTISTAS } from './mock-deportistas';
import { Observable, of } from 'rxjs';
import { HttpClient } from  '@angular/common/http';


@Injectable()

export class CarritoItemCompraService {

  constructor() { 
    console.log("Servicio listo para usar"); 
  }
}