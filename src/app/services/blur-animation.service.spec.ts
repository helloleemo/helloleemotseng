import { TestBed } from '@angular/core/testing';

import { BlurAnimationService } from './blur-animation.service';

describe('BlurAnimationService', () => {
  let service: BlurAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlurAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
