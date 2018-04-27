import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureGridComponent } from './fixture-grid.component';

describe('FixtureGridComponent', () => {
  let component: FixtureGridComponent;
  let fixture: ComponentFixture<FixtureGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
