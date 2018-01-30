import { Component, OnInit } from '@angular/core';
import { Printer } from '../printer';
import { PrinterService } from '../printer.service';

@Component({
  selector: 'app-printer-list',
  templateUrl: './printer-list.component.html',
  styleUrls: ['./printer-list.component.css']
})
export class PrinterListComponent implements OnInit {
  printers: Printer[];
  isLoading: boolean;
  constructor(private printerService: PrinterService) { }

  ngOnInit() {
    
    this.getPrinters();
  }

  getPrinters(): void {
    this.isLoading = true;
    this.printerService.getPrinters().subscribe(printers => {this.printers = printers; this.isLoading = false;});
  }

  filterPrinters(filter: string): void {
    console.log('filter on ' + filter);
  }

}
