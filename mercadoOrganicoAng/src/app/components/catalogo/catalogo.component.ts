import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../../models/catalogo';
import { ItemCompra } from '../../models/itemcompra';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  catalogos: Catalogo[]

  itemsCompra: ItemCompra[]

  constructor(private catalogosService: CatalogoService) { }

  ngOnInit(): void {
    this.getCatalogos();
  }

  getCatalogos(){
    this.catalogosService.getCatalogos().subscribe(
      catalogos => {
        const listadoCatalogos = catalogos;
        this.getItemsCompra(listadoCatalogos[0].id);
      });
  }

  getItemsCompra(catalogo_id: number): void{
    this.catalogosService.getItemsCompra(catalogo_id).subscribe(
    itemsCompra => {
      this.getProductos(catalogo_id, itemsCompra, 0);
    });
  }

  getProductos(catalogo_id: number, items: ItemCompra[], index: number): void{
      if(index < items.length)
      {
        var item = items[index];
        console.log("test4", item);
        this.catalogosService.getProducto(catalogo_id,item.id).subscribe(
        producto => {
          item.producto = producto[0];
          items[index] = item;
          console.log("test3", items[index]);
          index++;
          this.getProductos(catalogo_id, items, index);
        });
      }
      else
      {
        this.itemsCompra = items;
        console.log("test", this.itemsCompra);
        return;
      }
  }
}
