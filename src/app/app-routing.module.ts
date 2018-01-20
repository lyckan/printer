import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinterListComponent } from './printer-list/printer-list.component';

const routes: Routes = [
 // { path: '', redirectTo: '/printers', pathMatch: 'full' },
  { path: 'printers', component: PrinterListComponent }
];  

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

  
}