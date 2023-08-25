import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscarAhoraComponent } from './form-buscar-ahora.component';

describe('FormBuscarAhoraComponent', () => {
  let component: FormBuscarAhoraComponent;
  let fixture: ComponentFixture<FormBuscarAhoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBuscarAhoraComponent]
    });
    fixture = TestBed.createComponent(FormBuscarAhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
