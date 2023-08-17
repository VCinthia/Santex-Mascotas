import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPortadaComponent } from './s-portada.component';

describe('SPortadaComponent', () => {
  let component: SPortadaComponent;
  let fixture: ComponentFixture<SPortadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SPortadaComponent]
    });
    fixture = TestBed.createComponent(SPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
