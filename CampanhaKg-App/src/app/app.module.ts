import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VoluntaryService } from './_services/voluntary.service';
import { NavComponent } from './nav/nav.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FraternityComponent } from './Fraternity/Fraternity.component';
import { FraternityService } from './_services/fraternity.service';
import { CampaignComponent } from './Campaign/Campaign.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './_shared/title/title.component';
import { FraternityEditComponent } from './fraternity/fraternityEdit/fraternityEdit.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthService } from './_services/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    VolunteersComponent,
    NavComponent,
    FraternityComponent,
    CampaignComponent,
    DashboardComponent,
    TitleComponent,
    FraternityEditComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    VoluntaryService,
    FraternityService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

    //AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
