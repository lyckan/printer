import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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
  constructor(private printerService: PrinterService) { }

  ngOnInit() {
    this.printers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.printerService.searchPrinters(term)),
    );
  }

  @Output('filter')
  change: EventEmitter<string> = new EventEmitter<string>();

  search(term: string, event: KeyboardEvent): void {
    if(event.keyCode != 13) {
      this.searchTerms.next(term);
    }
  }

  onEnter(value: string): void {
    this.change.emit(value);
    this.searchTerms.next('');
  }


}
