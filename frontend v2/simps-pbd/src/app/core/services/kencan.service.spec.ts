import { TestBed } from '@angular/core/testing';

import { KencanService } from './kencan.service';

describe('KencanService', () => {
  let service: KencanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KencanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
