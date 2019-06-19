import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFeedComponent } from './right-feed.component';

describe('RightFeedComponent', () => {
  let component: RightFeedComponent;
  let fixture: ComponentFixture<RightFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
