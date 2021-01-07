import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FraternityComponent } from './Fraternity/Fraternity.component';
import { FraternityEditComponent } from './fraternity/fraternityEdit/fraternityEdit.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';


const routes: Routes = [
  {
    path: 'user', component: UserComponent, children:
      [
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent }
      ]
  },
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
