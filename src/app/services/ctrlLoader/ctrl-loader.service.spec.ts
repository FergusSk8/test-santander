import { TestBed } from '@angular/core/testing';

import { CtrlLoaderService } from './ctrl-loader.service';

describe('CtrlLoaderService', () => {
  let service: CtrlLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtrlLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
