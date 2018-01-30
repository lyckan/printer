import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-printer-filter',
  templateUrl: './printer-filter.component.html',
  styleUrls: ['./printer-filter.component.css']
})
export class PrinterFilterComponent implements OnInit {

  constructor() { }

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
