import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../../core/models/user.model';
import { MainFeatureState } from '../../state/main.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  public user$!: Observable<User | null>;

  constructor(private readonly store: Store<MainFeatureState>) {}

  ngOnInit(): void {
    this.setUserData();
  }

  private setUserData(): void {
    this.user$ = this.store.select((state) => state.auth.user);
  }
}
