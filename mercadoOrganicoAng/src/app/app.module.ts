import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { CarritoItemCompraComponent } from './components/carrito-item-compra/carrito-item-compra.component';
import { ClientService } from './client.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarritoConfirmarCompraComponent } from './components/carrito-confirmar-compra/carrito-confirmar-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    CatalogoComponent,
    CarritoItemCompraComponent,
    AddClientComponent,
    CarritoConfirmarCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
