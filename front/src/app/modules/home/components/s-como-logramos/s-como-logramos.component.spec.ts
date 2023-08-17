import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SComoLogramosComponent } from './s-como-logramos.component';

describe('SComoLogramosComponent', () => {
  let component: SComoLogramosComponent;
  let fixture: ComponentFixture<SComoLogramosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SComoLogramosComponent]
    });
    fixture = TestBed.createComponent(SComoLogramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
