import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SQueHacemosComponent } from './s-que-hacemos.component';

describe('SQueHacemosComponent', () => {
  let component: SQueHacemosComponent;
  let fixture: ComponentFixture<SQueHacemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SQueHacemosComponent]
    });
    fixture = TestBed.createComponent(SQueHacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
