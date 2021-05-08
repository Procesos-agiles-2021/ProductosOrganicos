import { Component, OnInit } from '@angular/core';
import { CarritoConfirmarCompraService } from '../../services/carrito-confirmar-compra.service';

@Component({
  selector: 'app-carrito-confirmar-compra',
  templateUrl: './carrito-confirmar-compra.component.html',
  styleUrls: ['./carrito-confirmar-compra.component.scss']
})
export class CarritoConfirmarCompraComponent implements OnInit {

  constructor( private _carritoConfirmarService:CarritoConfirmarCompraService) { 
    
  }

  ngOnInit(): void {
  }

}
