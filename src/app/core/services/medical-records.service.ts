import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { MedicalRecord } from '../models/medical-record.model';
import { MedicalRecordResponse } from '../interfaces/medical-record.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalRecordsService {
  private _url: string = environment.URL_BACKEND;

  constructor(private http: HttpClient) {}

  public createMedicalRecord(medicalRecord: MedicalRecord) {
    const endpoint = `${this.url}/medical-records/create`;

    return this.http.post<MedicalRecordResponse>(endpoint, medicalRecord);
  }

  public getMedicalRecords() {
    const endpoint = `${this.url}/medical-records`;

    return this.http.get<MedicalRecordResponse[]>(endpoint);
  }

  get url(): string {
    return this._url;
  }
}
