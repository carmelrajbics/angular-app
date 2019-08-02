import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedemoComponent } from './likedemo.component';

describe('LikedemoComponent', () => {
  let component: LikedemoComponent;
  let fixture: ComponentFixture<LikedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
