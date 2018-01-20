import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrinterComponent } from './printer/printer.component';
import { PrinterListComponent } from './printer-list/printer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PrinterComponent,
    PrinterListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
