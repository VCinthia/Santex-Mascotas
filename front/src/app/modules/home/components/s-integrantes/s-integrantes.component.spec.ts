import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIntegrantesComponent } from './s-integrantes.component';

describe('SIntegrantesComponent', () => {
  let component: SIntegrantesComponent;
  let fixture: ComponentFixture<SIntegrantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SIntegrantesComponent]
    });
    fixture = TestBed.createComponent(SIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
