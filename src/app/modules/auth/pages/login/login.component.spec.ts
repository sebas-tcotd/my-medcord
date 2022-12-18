import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';
import { Login } from '../../../../core/interfaces/login.interface';
import * as actions from '../../../../store/actions';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  let initialState: { registeredUsers: null; page: 1 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('should dispatch the form if it has data', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    const formData: Login = {
      email: 'mail@example.com',
      password: 'tunometecabrasarabambiche',
    };

    loginComponent.handleLoginFormData(formData);

    expect(dispatchSpy).toHaveBeenCalledWith(actions.loginAttempted(formData));
  });
});
