import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@sentry/angular';
import { Observable } from 'rxjs';
import { MainFeatureState } from '../../state/main.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {
  public isMobile!: boolean;
  public userName$!: Observable<string | undefined>;

  constructor(private readonly store: Store<MainFeatureState>) {}

  ngOnInit(): void {
    this.isMobile = this.isViewportMobile();
    this.userName$ = this.store.select((state) => state.auth.user?.name);
  }

  private isViewportMobile(): boolean {
    const width = window.innerWidth;

    if (width <= 1024) {
      return true;
    } else {
      return false;
    }
  }
}
