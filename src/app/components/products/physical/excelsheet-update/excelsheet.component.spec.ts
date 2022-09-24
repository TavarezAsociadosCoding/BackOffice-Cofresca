import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelsheetUpdateComponent } from './excelsheet.component';

describe('ExcelsheetComponent', () => {
  let component: ExcelsheetUpdateComponent;
  let fixture: ComponentFixture<ExcelsheetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcelsheetUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelsheetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
