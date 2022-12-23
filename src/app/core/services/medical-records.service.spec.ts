import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MedicalRecordsService } from './medical-records.service';
import { UsersService } from './users.service';

describe('MedicalRecordsService', () => {
  let service: MedicalRecordsService;
  let usersService: UsersService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    service = TestBed.inject(MedicalRecordsService);
    usersService = TestBed.inject(UsersService);
    controller = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
