import { TestBed } from '@angular/core/testing';

import { StorylistService } from './storylist.service';

describe('StorylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorylistService = TestBed.get(StorylistService);
    expect(service).toBeTruthy();
  });
});
