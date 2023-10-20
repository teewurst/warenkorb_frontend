import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellingComponent } from './upselling.component';

describe('UpsellingComponent', () => {
  let component: UpsellingComponent;
  let fixture: ComponentFixture<UpsellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsellingComponent]
    });
    fixture = TestBed.createComponent(UpsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
