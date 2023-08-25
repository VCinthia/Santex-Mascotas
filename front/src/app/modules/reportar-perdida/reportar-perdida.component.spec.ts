import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarPerdidaComponent } from './reportar-perdida.component';

describe('ReportarPerdidaComponent', () => {
  let component: ReportarPerdidaComponent;
  let fixture: ComponentFixture<ReportarPerdidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportarPerdidaComponent]
    });
    fixture = TestBed.createComponent(ReportarPerdidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
