import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent}//,
  //{ path: 'catalogo/productos/:idP', component: ProductoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
