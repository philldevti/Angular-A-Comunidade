import { TestBed, inject } from '@angular/core/testing';

import { UpdatehashService } from './updatehash.service';

describe('UpdatehashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatehashService]
    });
  });

  it('should be created', inject([UpdatehashService], (service: UpdatehashService) => {
    expect(service).toBeTruthy();
  }));
});
