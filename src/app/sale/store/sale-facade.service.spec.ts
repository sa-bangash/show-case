import { TestBed } from '@angular/core/testing';

import { SaleFacadeService } from './sale-facade.service';

describe('SaleFacadeService', () => {
  let service: SaleFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
