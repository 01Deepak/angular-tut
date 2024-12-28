import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSatatementComponent } from './control-satatement.component';

describe('ControlSatatementComponent', () => {
  let component: ControlSatatementComponent;
  let fixture: ComponentFixture<ControlSatatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlSatatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSatatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
