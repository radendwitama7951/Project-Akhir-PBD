import { TestBed } from '@angular/core/testing';

import { MantanService } from './mantan.service';

describe('ServicesService', () => {
  let service: MantanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
