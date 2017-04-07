import { TestBed, inject } from '@angular/core/testing';

import { BlazerService } from './blazer.service';

describe('BlazerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlazerService]
    });
  });

  it('should ...', inject([BlazerService], (service: BlazerService) => {
    expect(service).toBeTruthy();
  }));
});
