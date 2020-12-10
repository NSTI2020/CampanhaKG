import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { HttpClientModule } from '@angular/common/http';
import { VoluntaryService } from './_services/voluntary.service';

@NgModule({
  declarations: [
    AppComponent,
    VolunteersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VoluntaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
