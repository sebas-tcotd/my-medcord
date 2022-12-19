import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adjust table when grater than 400 pixels', () => {
    let numEjecucion = 0;
    let params = { "clientWidth": 600, "api": {
      "sizeColumnsToFit": () => {numEjecucion++}
    }}
    component.onGridSizeChanged(params)
    expect(numEjecucion).toEqual(1)
  });

  it('adjust table when lesser than 400 pixels', () => {
    let numEjecucion = 0;
    let params = { "clientWidth": 200, "columnApi": {
      "autoSizeAllColumns": () => {numEjecucion++}
    }}
    component.onGridSizeChanged(params)
    expect(numEjecucion).toEqual(1)
  });
});
