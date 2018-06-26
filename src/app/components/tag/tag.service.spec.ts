import {TestBed, inject} from '@angular/core/testing';

import {TagService} from './tag.service';

describe('TagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService]
    });
  });

  it('should be created', inject([TagService], (service: TagService) => {
    expect(service).toBeTruthy();
  }));

  it('should be 编程', inject([TagService], (service: TagService) => {
    expect(service.getParentType('html')).toBe('编程');
  }));
});
