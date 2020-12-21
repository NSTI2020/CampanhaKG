import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FraternityComponent } from './Fraternity/Fraternity.component';
import { FraternityEditComponent } from './fraternity/fraternityEdit/fraternityEdit.component';
import { VolunteersComponent } from './volunteers/volunteers.component';


const routes: Routes = [
  { path: 'voluntary', component: VolunteersComponent },
  { path: 'fraternity', component: FraternityComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fraternity/:id/edit', component: FraternityEditComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
