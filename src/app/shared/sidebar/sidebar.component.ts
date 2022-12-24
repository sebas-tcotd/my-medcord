import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.reducer';
import * as viewportActions from '../../store/actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  private _isMobile$!: Observable<boolean>;

  public isSidebarOpen: boolean = false;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.isMobile$ = this.store.select((state) => state.ui.isMobile!);
    this.isViewportMobile();
  }

  @HostListener('window:resize', ['$event'])
  private isViewportMobile() {
    const width = window.innerWidth;

    if (width < 1024) {
      this.store.dispatch(viewportActions.viewportMobile({ width }));
      return true;
    } else {
      this.store.dispatch(viewportActions.viewportDesktop({ width }));
      return false;
    }
  }

  public get isMobile$(): Observable<boolean> {
    return this._isMobile$;
  }

  public set isMobile$(value: Observable<boolean>) {
    this._isMobile$ = value;
  }
}
