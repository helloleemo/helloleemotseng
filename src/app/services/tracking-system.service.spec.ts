import { TestBed } from '@angular/core/testing';
import { TrackingSystemService } from './tracking-system.service';

describe('TrackingSystemService', () => {
  let service: TrackingSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
