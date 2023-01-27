import { TestBed } from '@angular/core/testing';

import { SocketAdminService } from './socket-admin.service';

describe('SocketAdminService', () => {
  let service: SocketAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
