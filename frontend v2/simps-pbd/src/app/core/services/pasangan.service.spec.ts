import { TestBed } from '@angular/core/testing';

import { PasanganService } from './pasangan.service';

describe('PasanganService', () => {
  let service: PasanganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasanganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
