import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { HospitalesRoutingModule } from './hospitales.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,RouterModule,HospitalesRoutingModule,FormsModule
  ],
  exports:[ListComponent,AddComponent]
})
export class HospitalesModule { }
