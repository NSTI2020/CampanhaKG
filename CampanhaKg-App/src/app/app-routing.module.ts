import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FraternityComponent } from './Fraternity/Fraternity.component';
import { FraternityEditComponent } from './fraternity/fraternityEdit/fraternityEdit.component';
import { CampaignComponent } from './campaign/campaign.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './user/profile/profile.component';


const routes: Routes = [
  {
    path: 'user', component: UserComponent, children:
      [
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent }
        //{ path: ':id/edit', component: ProfileComponent, canActivate: [AuthGuard] },

      ]
  },
  { path: 'campaign', component: CampaignComponent, canActivate: [AuthGuard] },

  { path: 'fraternity', component: FraternityComponent, canActivate: [AuthGuard] },
  { path: 'fraternity/:id/edit', component: FraternityEditComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'campaign', pathMatch: 'full' },
  { path: '**', redirectTo: 'campaign', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
