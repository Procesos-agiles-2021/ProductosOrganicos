import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { ItemCompra } from '../models/itemcompra';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  catalogos: Catalogo[]

  defaultCatalogo: Catalogo

  itemsCompra: ItemCompra[]

  constructor(private catalogosService: CatalogosService) { }

  ngOnInit(): void {
    this.getCatalogos();
    this.getItemsCompra(defaultCatalogo.id);
  }

  getCatalogos(): void{
    this.catalogosService.getCatalogos().subscribe(catalogos => this.catalogos = catalogos);
    this.defaultCatalogo = catalogos[0];
  }

  getItemsCompra(catalogo_id: number): void{
    this.catalogosService.getItemsCompra(catalogo_id).subscribe(itemsCompra => this.itemsCompra = itemsCompra);
  }
}
