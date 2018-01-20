import { Component, OnInit } from '@angular/core';
import { Printer } from '../printer';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {

  printer: Printer  = {
    adminUri: 'http://adminur.se',
    color: false,
    duplex: true,
    id: 232323,
    installed: true,
    isBonjour: true,
    name: 'Das printer',
    uri: 'http://printeruri.se' 
  };
  constructor() { }
  
  ngOnInit() {
  }

}
