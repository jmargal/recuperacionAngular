import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: ListComponent,pathMatch:'full' },
  { path: 'add', canActivate:[AuthGuard], component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalesRoutingModule {}
