import { TestBed } from '@angular/core/testing';

import { GithubUserNameServiceService } from './github-user-name-service.service';

describe('GithubUserNameServiceService', () => {
  let service: GithubUserNameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubUserNameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
