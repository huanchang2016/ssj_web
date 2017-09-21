import { TestBed, inject } from '@angular/core/testing';

import { InRecruitJoblistService } from './in-recruit-joblist.service';

describe('InRecruitJoblistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InRecruitJoblistService]
    });
  });

  it('should be created', inject([InRecruitJoblistService], (service: InRecruitJoblistService) => {
    expect(service).toBeTruthy();
  }));
});
