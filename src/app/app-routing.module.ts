import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinterListComponent } from './printer-list/printer-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/printers', pathMatch: 'full' },
  { path: 'printers', component: PrinterListComponent },
  { path: 'drivers', component: DriverListComponent }
];  

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

  
}