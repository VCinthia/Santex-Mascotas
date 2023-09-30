import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusMascotasComponent } from './tus-mascotas.component';

describe('TusMascotasComponent', () => {
  let component: TusMascotasComponent;
  let fixture: ComponentFixture<TusMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TusMascotasComponent]
    });
    fixture = TestBed.createComponent(TusMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
