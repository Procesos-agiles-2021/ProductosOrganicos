import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { ItemCompra } from '../models/itemcompra';
//import { DEPORTISTAS } from './mock-deportistas';
import { Observable, of } from 'rxjs';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private  httpClient:  HttpClient
    ) { }

  API_URL  =  'https://mercado-organico.herokuapp.com/';
  private catalogos: Array<Catalogo>;

  private itemsCompra: Array<ItemCompra>;

  getCatalogos(): Observable<Catalogo[]>{
    this.catalogos = [] ;
    this.httpClient.get(`${this.API_URL}/catalogo/`).subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let catalogo1 = new Catalogo();
            catalogo1.id = dataItem.id;
            catalogo1.fecha_creacion = dataItem.fecha_creacion;
            catalogo1.admin_creador = dataItem.admin_creador;
            this.catalogos.push(catalogo1)
        });
      });
    return of(this.catalogos);
    }

  getCatalogo(id: number): Observable<Catalogo> {
    return of(this.catalogos.find(catalogo => catalogo.id === id));
  }

  getItemsCompra(catalogo_id: number): Observable<ItemCompra[]>{
    this.itemsCompra = [] ;
    this.httpClient.get(`${this.API_URL}/catalogo/` + catalogo_id + '/items').subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let itemCompra1 = new ItemCompra();
            itemCompra1.id = dataItem.id;
            itemCompra1.imagenUrl = dataItem.imagenUrl;
            itemCompra1.visibilidad = dataItem.visibilidad;
            this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + itemCompra1.id)
            .subscribe(producto => itemCompra1.producto = producto);
            this.itemsCompra.push(itemCompra1)
        });
      });
    return of(this.itemsCompra);
    }

}
