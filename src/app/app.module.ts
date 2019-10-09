import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DestinosComponent } from './destinos/destinos.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { PlaneaTuViajeComponent } from './planea-tu-viaje/planea-tu-viaje.component';
import { ItinerariosComponent } from './itinerarios/itinerarios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DestinosComponent,
    HotelesComponent,
    PlaneaTuViajeComponent,
    ItinerariosComponent,
    ContactoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
