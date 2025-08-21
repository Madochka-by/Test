import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFooComponent } from './view-foo.component';

describe('ViewFooComponent', () => {
  let component: ViewFooComponent;
  let fixture: ComponentFixture<ViewFooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFooComponent]
    });
    fixture = TestBed.createComponent(ViewFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
