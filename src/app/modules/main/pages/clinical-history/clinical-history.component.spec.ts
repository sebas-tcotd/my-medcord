import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ClinicalHistoryComponent } from './clinical-history.component';

describe('ClinicalHistoryComponent', () => {
  let component: ClinicalHistoryComponent;
  let fixture: ComponentFixture<ClinicalHistoryComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalHistoryComponent ],
      providers: [provideMockStore({ })],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
