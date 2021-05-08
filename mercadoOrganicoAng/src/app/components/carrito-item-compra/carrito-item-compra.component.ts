import {Component } from '@angular/core';
import { CarritoItemCompraService } from '../../services/carrito-item-compra.service';


@Component({
    selector: 'app-carritoItemCompra',
    templateUrl: './carrito-item-compra.component.html'
})

export class CarritoItemCompraComponent {

    constructor( private _carritoCompraService:CarritoItemCompraService) { 
    
    }
  
    ngOnInit(): void {
    }
  

}