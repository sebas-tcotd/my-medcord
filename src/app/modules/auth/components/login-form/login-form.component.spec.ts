import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let loginFormComponent: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    loginFormComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(loginFormComponent).toBeTruthy();
  });

  it('should to have the correct amount of inputs', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('form');
    const inputElements = formElement.querySelectorAll('input');

    expect(inputElements.length).toBe(2);
  });

  it('should have set empty values at the beginning', () => {
    const loginForm = loginFormComponent.loginForm;
    const loginFormValues = {
      email: '',
      password: '',
    };

    expect(loginForm.value).toEqual(loginFormValues);
  });

  it("should emit the form data if it's correct", () => {
    const loginFormMailElement: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#email');
    const loginFormPasswordElement: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#password');

    loginFormMailElement.value = 'example@mail.com';
    loginFormPasswordElement.value = 'tunometecabrasarabambiche';

    loginFormMailElement.dispatchEvent(new Event('input'));
    loginFormPasswordElement.dispatchEvent(new Event('input'));

    let actualFormData: any | undefined;

    loginFormComponent.loginDataEmitter.subscribe(
      (formData) => (actualFormData = formData)
    );

    loginFormComponent.login();

    expect(actualFormData).toEqual({
      email: 'example@mail.com',
      password: 'tunometecabrasarabambiche',
    });
  });
});
