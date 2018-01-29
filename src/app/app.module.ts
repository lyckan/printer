import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrinterComponent } from './printer/printer.component';
import { PrinterListComponent } from './printer-list/printer-list.component';
import { PrinterService } from './printer.service';
import { AppRoutingModule } from './/app-routing.module';
import { DriverListComponent } from './driver-list/driver-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';


@NgModule({
  declarations: [
    AppComponent,
    PrinterComponent,
    PrinterListComponent,
    DriverListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PrinterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
