import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Printer } from '../Printer';
import { PrinterService } from '../printer.service';

@Component({
  selector: 'app-printer-filter',
  templateUrl: './printer-filter.component.html',
  styleUrls: ['./printer-filter.component.css']
})
export class PrinterFilterComponent implements OnInit {
  printers$: Observable<Printer[]>;
  private searchTerms = new Subject<string>();
  constructor(private PrinterService: PrinterService) { }

  ngOnInit() {
  }

  @Output('filter')
  change: EventEmitter<string> = new EventEmitter<string>();

  onClickMe() {
    this.change.emit('Test  ');
  }

  onEnter(value: string) {
    this.change.emit(value);
  }


}
