import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MedicalAppointmentFormComponent } from './medical-appointment-form.component';

describe('MedicalAppointmentFormComponent', () => {
  let component: MedicalAppointmentFormComponent;
  let fixture: ComponentFixture<MedicalAppointmentFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentFormComponent ],
      providers: [{ provide: FormBuilder, useValue: formBuilder }, {
        provide: ActivatedRoute, useValue: {params: of({id: 123})}}],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
