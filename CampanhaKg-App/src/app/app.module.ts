import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';



import { FraternityComponent } from './Fraternity/Fraternity.component';
import { FraternityService } from './_services/fraternity.service';
import { FraternityEditComponent } from './fraternity/fraternityEdit/fraternityEdit.component';

import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

import { CampaignComponent } from './campaign/campaign.component';
import { CampaignEditComponent } from '../app/campaign/campaignEdit/campaignEdit.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './_shared/title/title.component';

import { NavComponent } from './nav/nav.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CampaignService } from './_services/campaign.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DateTimePipe } from './_helps/DateTime.pipe';
import { DashboardService } from './_services/dashboard.service';
import { NavService } from './_services/nav.service';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FraternityComponent,
    FraternityEditComponent,
    CampaignComponent,
    CampaignEditComponent,

    DashboardComponent,
    TitleComponent,
    NavComponent,
    DateTimePipe,

    UserComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FraternityService,
    CampaignService,
    //????????????? abaixo

    AuthInterceptor,
    DashboardService,
    NavService,


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
