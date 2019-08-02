import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StardemoComponent } from './stardemo.component';

describe('StardemoComponent', () => {
  let component: StardemoComponent;
  let fixture: ComponentFixture<StardemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StardemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StardemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
