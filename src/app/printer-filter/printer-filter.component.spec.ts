import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterFilterComponent } from './printer-filter.component';

describe('PrinterFilterComponent', () => {
  let component: PrinterFilterComponent;
  let fixture: ComponentFixture<PrinterFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
