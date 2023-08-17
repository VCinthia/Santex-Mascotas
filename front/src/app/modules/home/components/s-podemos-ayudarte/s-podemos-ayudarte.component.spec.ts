import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPodemosAyudarteComponent } from './s-podemos-ayudarte.component';

describe('SPodemosAyudarteComponent', () => {
  let component: SPodemosAyudarteComponent;
  let fixture: ComponentFixture<SPodemosAyudarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SPodemosAyudarteComponent]
    });
    fixture = TestBed.createComponent(SPodemosAyudarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
