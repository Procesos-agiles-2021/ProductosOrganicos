import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AddClientComponent } from './components/add-client/add-client.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'add', component: AddClientComponent }//,
  //{ path: 'catalogo/productos/:idP', component: ProductoDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
