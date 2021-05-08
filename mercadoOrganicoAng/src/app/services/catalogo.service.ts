import { Injectable } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { Producto } from '../models/producto';
import { ItemCompra } from '../models/itemcompra';
//import { DEPORTISTAS } from './mock-deportistas';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private  httpClient:  HttpClient
    ) { }

  //API_URL  =  'https://mercado-organico.herokuapp.com';
  API_URL  =  'http://localhost:8000';
  private catalogos: Array<Catalogo>;

  private itemsCompra: Array<ItemCompra>;

  getCatalogos(): Observable<Catalogo[]> {
    return this.httpClient.get<Catalogo[]>(`${this.API_URL}/catalogo/`);
  }

  getCatalogo(id: number): Observable<Catalogo> {
    return of(this.catalogos.find(catalogo => catalogo.id === id));
  }

  getItemsCompra(catalogo_id: number): Observable<ItemCompra[]> {
    return this.httpClient.get<ItemCompra[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/items');
  }

  getProducto(catalogo_id: number, item_id): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + item_id);
  }

  /*getItemsCompra(catalogo_id: number): Observable<ItemCompra[]>{
    var lista = this.httpClient.get<ItemCompra[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/items')
    .pipe(map(items => items.map(item => this.getProducto(catalogo_id, item)))
    );
    lista.forEach(items => {
      items.forEach(item => {
        console.log("hola"+item.id, item);
        item.producto = this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + item.id)
        .pipe(map(item => (
               { id: item.id, nombre: item.nombre, precio: item.precio}))
        );
        console.log("hola2" , item);
      })
    })
    console.log("listacheck2", lista);

    return lista;
  }


  getProducto(catalogo_id: number, ic: ItemCompra): void{
    ic.producto = this.httpClient.get<Producto>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + ic.id);
  }
  */

  /*getItemsCompra(catalogo_id: number): Observable<ItemCompra[]>{
    this.itemsCompra = [];
    this.httpClient.get<ItemCompra[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/items').subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let itemCompra1 = new ItemCompra();
            itemCompra1.id = dataItem.id;
            itemCompra1.imagenUrl = dataItem.imagenUrl;
            itemCompra1.visibilidad = dataItem.visibilidad;
            this.httpClient.get<Producto[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + itemCompra1.id).subscribe(
            productos =>
            {
              const listaProductos = productos;
              itemCompra1.producto = listaProductos[0];
              this.itemsCompra.push(itemCompra1);
              console.log("no se loop", this.itemsCompra);
            });
            this.itemsCompra.push(itemCompra1);
        });
      });
    console.log("no se", this.itemsCompra);
    console.log("no se2", this.itemsCompra[0]);
    return of(this.itemsCompra);
    }


    getItemsCompra(catalogo_id: number): Observable<ItemCompra[]>{
    this.itemsCompra = [];
    this.httpClient.get<ItemCompra[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/items').subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let itemCompra1 = new ItemCompra();
            itemCompra1.id = dataItem.id;
            itemCompra1.imagenUrl = dataItem.imagenUrl;
            itemCompra1.visibilidad = dataItem.visibilidad;
            this.httpClient.get<Producto[]>(`${this.API_URL}/catalogo/` + catalogo_id + '/itemproducto/' + itemCompra1.id).subscribe(
            productos =>
            {
              const listaProductos = productos;
              itemCompra1.producto = listaProductos[0];
              this.itemsCompra.push(itemCompra1);
              console.log("no se loop", this.itemsCompra);
              console.log("no se loop2", this.itemsCompra[0]);
            });
            this.itemsCompra.push(itemCompra1);
        });
      });
    console.log("no se", this.itemsCompra);
    console.log("no se2", this.itemsCompra[0]);
    return of(this.itemsCompra);
    }
    */

  //pushItemCompra(iC: ItemCompra): void{
  //  this.itemsCompra.push(iC);
  //}

  //updatePrice(product_id: number, price:number){
  //  this.httpClient.post(`${this.API_URL}/catalogo/` + catalogo_id + '/items')
  //  }
}
