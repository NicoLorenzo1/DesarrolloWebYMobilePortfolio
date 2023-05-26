import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomCarComponent } from './zoom-car.component';

describe('ZoomCarComponent', () => {
  let component: ZoomCarComponent;
  let fixture: ComponentFixture<ZoomCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomCarComponent]
    });
    fixture = TestBed.createComponent(ZoomCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
