import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppointmentResponse } from '../interfaces/appointment.interface';
import { Appointment } from '../models/appointment.model';
import { MedicalMetadata } from '../models/medical-metadata.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private _url: string = environment.URL_BACKEND;

  constructor(private http: HttpClient) {}

  public createAppointment(body: Appointment) {
    const endpoint = `${this.url}/appointment/create`;

    return this.http.post<AppointmentResponse>(endpoint, body);
  }

  public getAppointmentsByMedicAndHistoryId(
    medicalRecordId: number,
    doctorId: string
  ) {
    const params = new HttpParams()
      .append('doctorId', doctorId)
      .append('medicalRecordId', medicalRecordId);

    const endpoint = `${this.url}/appointment/getByDoctorAndMedicalRecordIds`;

    return this.http.get<Appointment>(endpoint, { params });
  }

  public editAppointment(
    body: MedicalMetadata,
    metadata: { doctorId: string; medicalRecordId: number }
  ) {
    const params = new HttpParams()
      .append('doctorId', metadata.doctorId)
      .append('medicalRecordId', metadata.medicalRecordId);

    const endpoint = `${this.url}/appointment`;

    return this.http.put(endpoint, body, { params });
  }

  get url() {
    return this._url;
  }
}
