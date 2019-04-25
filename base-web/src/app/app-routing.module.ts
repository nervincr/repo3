import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteBuenoComponent } from './components/componente-bueno/componente-bueno.component';

const routes: Routes = [
  //{ path: 'ComponenteBueno', component: ComponenteBuenoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
