import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MedicoComponent } from './medico/medico.component';
import { AddComponent } from './add/add.component';
import { Router, RouterModule } from '@angular/router';
import { MedicosRoutingModule } from './medicos.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    MedicoComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MedicosRoutingModule,
    ReactiveFormsModule
  ],
  exports:[ListComponent,MedicoComponent,AddComponent]
})
export class MedicosModule { }
