import { TestBed } from '@angular/core/testing';

import { LoginstatService } from './loginstat.service';

describe('LoginstatService', () => {
  let service: LoginstatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginstatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
