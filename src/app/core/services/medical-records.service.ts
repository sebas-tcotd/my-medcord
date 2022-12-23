import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { MedicalRecord } from '../models/medical-record.model';

@Injectable({
  providedIn: 'root',
})
export class MedicalRecordsService {
  private _url: string = environment.URL_BACKEND;

  constructor(private http: HttpClient) {}

  public createMedicalRecord(medicalRecord: MedicalRecord) {
    const endpoint = `${this.url}/medical-record/create`;

    return this.http.post(endpoint, medicalRecord);
  }

  get url(): string {
    return this._url;
  }
}
