/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoluntaryService } from './voluntary.service';

describe('Service: Voluntary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoluntaryService]
    });
  });

  it('should ...', inject([VoluntaryService], (service: VoluntaryService) => {
    expect(service).toBeTruthy();
  }));
});
