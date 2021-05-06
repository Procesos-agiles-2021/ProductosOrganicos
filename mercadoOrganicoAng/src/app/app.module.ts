import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";


//rutas
import { AppRoutingModule } from './app-routing.module';

//servicios

import { CarritoItemCompraService } from './services/carrito-item-compra.service';
import { CarritoConfirmarCompraService } from './services/carrito-confirmar-compra.service';
import { ClientService } from './client.service';


//componentes
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { CarritoItemCompraComponent } from './components/carrito-item-compra/carrito-item-compra.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarritoConfirmarCompraComponent } from './components/carrito-confirmar-compra/carrito-confirmar-compra.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    CatalogoComponent,
    CarritoItemCompraComponent,
    AddClientComponent,
    CarritoConfirmarCompraComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClientService,
    CarritoConfirmarCompraService,
    CarritoItemCompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
