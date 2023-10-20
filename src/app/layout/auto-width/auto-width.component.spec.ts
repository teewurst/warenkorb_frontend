import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoWidthComponent } from './auto-width.component';

describe('AutoWidthComponent', () => {
  let component: AutoWidthComponent;
  let fixture: ComponentFixture<AutoWidthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoWidthComponent]
    });
    fixture = TestBed.createComponent(AutoWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
