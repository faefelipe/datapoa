import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusLinesComponent } from './app/bus-lines/bus-lines.component';
import { ItinerarioComponent } from './itinerario/itinerario.component';
import { InterceptorComponent } from './interceptor/interceptor.component';

@NgModule({
  declarations: [
    AppComponent,
    BusLinesComponent,
    ItinerarioComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
