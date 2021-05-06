import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoConfirmarCompraComponent } from './components/carrito-confirmar-compra/carrito-confirmar-compra.component';
import { CarritoItemCompraComponent } from './components/carrito-item-compra/carrito-item-compra.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carritoConfirmar', component: CarritoConfirmarCompraComponent },
  { path: 'carrito', component: CarritoItemCompraComponent },
  { path: 'add', component: AddClientComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
