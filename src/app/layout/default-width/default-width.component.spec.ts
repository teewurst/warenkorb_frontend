import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWidthComponent } from './default-width.component';

describe('DefaultWidthComponent', () => {
  let component: DefaultWidthComponent;
  let fixture: ComponentFixture<DefaultWidthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultWidthComponent]
    });
    fixture = TestBed.createComponent(DefaultWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
