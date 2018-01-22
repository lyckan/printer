import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrinterComponent } from './printer/printer.component';
import { PrinterListComponent } from './printer-list/printer-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DriverListComponent } from './driver-list/driver-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PrinterComponent,
    PrinterListComponent,
    DriverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
