import { Printer } from './printer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PrinterService {

  private printersUrl = 'api/printers';

  constructor(private http: HttpClient) { }
  
  getPrinters (): Observable<Printer[]> {
    return this.http.get<Printer[]>(this.printersUrl)
  }

  searchPrinters(term: string): Observable<Printer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Printer[]>('api/printers/?name='+term);
  }
  
}
