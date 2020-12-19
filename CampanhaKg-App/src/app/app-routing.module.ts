import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FraternityComponent } from './Fraternity/Fraternity.component';
import { VolunteersComponent } from './volunteers/volunteers.component';


const routes: Routes = [
  { path: 'voluntary', component: VolunteersComponent },
  {path: 'fraternity', component: FraternityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
