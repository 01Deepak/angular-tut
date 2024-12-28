import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedLoopComponent } from './nested-loop.component';

describe('NestedLoopComponent', () => {
  let component: NestedLoopComponent;
  let fixture: ComponentFixture<NestedLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedLoopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
