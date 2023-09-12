import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReportarComponent } from './form-reportar.component';

describe('FormBusquedaComponent', () => {
  let component: FormReportarComponent;
  let fixture: ComponentFixture<FormReportarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReportarComponent]
    });
    fixture = TestBed.createComponent(FormReportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
