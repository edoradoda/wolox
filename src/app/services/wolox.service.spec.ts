import { TestBed } from '@angular/core/testing';

import { WoloxService } from './wolox.service';

describe('WoloxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WoloxService = TestBed.get(WoloxService);
    expect(service).toBeTruthy();
  });
});
