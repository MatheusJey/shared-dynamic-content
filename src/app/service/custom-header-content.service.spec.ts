import { TestBed } from '@angular/core/testing';

import { CustomHeaderContentService } from './custom-header-content.service';

describe('CustomHeaderContentService', () => {
  let service: CustomHeaderContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomHeaderContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
