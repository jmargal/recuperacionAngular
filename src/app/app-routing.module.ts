import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersModule } from './users/users.module';
import { HospitalesModule } from './hospitales/hospitales.module';
import { MedicosModule } from './medicos/medicos.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'hospitales',loadChildren:()=>HospitalesModule},
  { path: 'medicos',canActivate:[AuthGuard], loadChildren:()=>MedicosModule},
  { path: 'auth', loadChildren: ()=> AuthModule},
  { path: 'users', loadChildren: ()=> UsersModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
