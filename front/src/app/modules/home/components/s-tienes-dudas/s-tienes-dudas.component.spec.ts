import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STienesDudasComponent } from './s-tienes-dudas.component';

describe('STienesDudasComponent', () => {
  let component: STienesDudasComponent;
  let fixture: ComponentFixture<STienesDudasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [STienesDudasComponent]
    });
    fixture = TestBed.createComponent(STienesDudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
