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

  getPrinters(filter: string = ''): void {
    this.isLoading = true;
    this.printerService.getPrinters().subscribe(printers => {
      this.printers = printers; 
      this.printers = this.printers.filter(printer => printer.name.toLowerCase().includes(filter.toLowerCase()));
      this.isLoading = false;
    });
  }

  filterPrinters(filter: string): void {
      this.getPrinters(filter);
  }

}
