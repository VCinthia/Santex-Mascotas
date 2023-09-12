import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAhoraComponent } from './buscar-ahora.component';

describe('BuscarAhoraComponent', () => {
  let component: BuscarAhoraComponent;
  let fixture: ComponentFixture<BuscarAhoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarAhoraComponent]
    });
    fixture = TestBed.createComponent(BuscarAhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
