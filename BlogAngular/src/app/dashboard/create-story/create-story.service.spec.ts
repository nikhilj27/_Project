import { TestBed } from '@angular/core/testing';

import { CreateStoryService } from './create-story.service';

describe('CreateStoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateStoryService = TestBed.get(CreateStoryService);
    expect(service).toBeTruthy();
  });
});
