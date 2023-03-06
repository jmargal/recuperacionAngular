import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from '../medicos/list/list.component';
import { MedicoComponent } from './medico/medico.component';
import { AddComponent } from '../medicos/add/add.component';



const routes: Routes = [
  { path: '', component: ListComponent ,pathMatch:'full'},
  { path: 'add', component: AddComponent},
  { path: 'medico/:id', component: MedicoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicosRoutingModule {}
