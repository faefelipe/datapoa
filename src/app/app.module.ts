import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './interceptor/interceptor.module';

import { AppComponent } from './app.component';
import { BusLinesComponent } from './bus-lines/bus-lines.component';
import { ItinerarioComponent } from './itinerario/itinerario.component';

@NgModule({
  declarations: [
    AppComponent,
    BusLinesComponent,
    ItinerarioComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    InterceptorModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
