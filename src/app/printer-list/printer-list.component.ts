import { Component, OnInit } from '@angular/core';
import { Printer } from '../printer';
@Component({
  selector: 'app-printer-list',
  templateUrl: './printer-list.component.html',
  styleUrls: ['./printer-list.component.css']
})
export class PrinterListComponent implements OnInit {
  printers: Printer[]  = [{
    adminUri: 'http://adminur.se',
    color: false,
    duplex: true,
    id: 232323,
    installed: true,
    isBonjour: true,
    name: 'Das printer',
    uri: 'http://printeruri.se' 
  },
{
  adminUri: 'http://adminur.se',
    color: false,
    duplex: true,
    id: 132323,
    installed: true,
    isBonjour: true,
    name: 'The printer',
    uri: 'http://printeruri.se' 
  },
  {
    adminUri: 'http://adminur.se',
      color: false,
      duplex: true,
      id: 132322,
      installed: true,
      isBonjour: true,
      name: 'Printer',
      uri: 'http://printeruri.se' 
    },
];
  constructor() { }

  ngOnInit() {
  }

}
