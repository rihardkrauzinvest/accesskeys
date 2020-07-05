import { TestBed } from '@angular/core/testing';

import { RkUiService } from './rk-ui.service';

describe('RkUiService', () => {
  let service: RkUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RkUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
