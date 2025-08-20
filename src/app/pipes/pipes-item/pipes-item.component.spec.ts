import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesItemComponent } from './pipes-item.component';

describe('PipesItemComponent', () => {
  let component: PipesItemComponent;
  let fixture: ComponentFixture<PipesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesItemComponent]
    });
    fixture = TestBed.createComponent(PipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
