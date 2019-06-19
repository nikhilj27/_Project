import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFeedComponent } from './left-feed.component';

describe('LeftFeedComponent', () => {
  let component: LeftFeedComponent;
  let fixture: ComponentFixture<LeftFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
