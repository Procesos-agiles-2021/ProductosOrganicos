import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../../models/catalogo';
import { ItemCompra } from '../../models/itemcompra';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoAdminComponent implements OnInit {

  catalogos: Catalogo[]

  defaultCatalogo: Catalogo

  itemsCompra: ItemCompra[]

  constructor(private catalogosService: CatalogoService) { }

  ngOnInit(): void {
    this.getCatalogos();
    this.getItemsCompra(this.defaultCatalogo.id);
  }

  getCatalogos(): void{
    this.catalogosService.getCatalogos().subscribe(catalogos => this.catalogos = catalogos);
    console.log("texto", this.catalogos.findIndex(0));
    if(this.catalogos)
    {
      this.defaultCatalogo = this.catalogos.findIndex(0);
      console.log("facil", this.defaultCatalogo);
    }
  }

  getItemsCompra(catalogo_id: number): void{
    this.catalogosService.getItemsCompra(catalogo_id).subscribe(itemsCompra => this.itemsCompra = itemsCompra);
  }

  updatePrice(product_id: number, precio:number): void{
    this.catalogosService.updatePrice(product_id, precio);
  }

  remove(itemCompra_id: number): void{
    this.catalogosService.remove(itemCompra_id);
  }
}
