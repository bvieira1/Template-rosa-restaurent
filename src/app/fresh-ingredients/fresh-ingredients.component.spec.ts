import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshIngredientsComponent } from './fresh-ingredients.component';

describe('FreshIngredientsComponent', () => {
  let component: FreshIngredientsComponent;
  let fixture: ComponentFixture<FreshIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
