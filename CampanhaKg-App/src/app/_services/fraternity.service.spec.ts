/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FraternityService } from './fraternity.service';

describe('Service: Fraternity', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FraternityService]
    });
  });

  it('should ...', inject([FraternityService], (service: FraternityService) => {
    expect(service).toBeTruthy();
  }));
});
