import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MedicalRecord } from '../models/medical-record.model';
import { MedicalRecordsService } from './medical-records.service';
import { UsersService } from './users.service';
import { NationalityEnum } from '../enums/nationality.enum';
import { GenderEnum } from '../enums/gender.enum';

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

  it('should create medical record', () => {
    const record: MedicalRecord = {
      firstName: "Luisa",
      lastName: "Fernandez",
      dni: "7769208",
      birthplace: "Lima",
      birthdate: "16/03/86",
      nationality: NationalityEnum.PERUVIAN,
      gender: GenderEnum.FEMALE,
      address: "Av. Venezuela 1043",
      telephone: "96435353"
    };

    service.createMedicalRecord(record)
  });

  it('should get medical record', () => {
    service.getMedicalRecords()
  });
});
