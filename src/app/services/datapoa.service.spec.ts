import { TestBed, inject } from '@angular/core/testing';

import { DatapoaService } from './datapoa.service';

describe('DatapoaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatapoaService]
    });
  });

  it('should be created', inject([DatapoaService], (service: DatapoaService) => {
    expect(service).toBeTruthy();
  }));
});
