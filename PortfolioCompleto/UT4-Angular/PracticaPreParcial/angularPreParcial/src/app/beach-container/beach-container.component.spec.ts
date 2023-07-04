import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachContainerComponent } from './beach-container.component';

describe('BeachContainerComponent', () => {
  let component: BeachContainerComponent;
  let fixture: ComponentFixture<BeachContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeachContainerComponent]
    });
    fixture = TestBed.createComponent(BeachContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
