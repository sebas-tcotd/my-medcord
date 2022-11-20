import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: [],
})
export class LoadingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  private _isLoading$!: Observable<boolean>;

  private _modalSubscription!: Subscription;

  constructor(
    private readonly store: Store<AppState>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initStore();
  }
  ngAfterViewInit(): void {
    this.toggleModal();
  }
  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }

  private initStore(): void {
    this.isLoading$ = this.store.select((state) => state.ui.isLoading);
  }

  private toggleModal() {
    const modal = this.renderer.selectRootElement(
      this.modal.nativeElement,
      true
    );

    this.modalSubscription = this.isLoading$.subscribe((state) => {
      state ? modal.showModal() : modal.close();
    });
  }

  public get isLoading$(): Observable<boolean> {
    return this._isLoading$;
  }

  public get modalSubscription(): Subscription {
    return this._modalSubscription;
  }

  public set isLoading$(value: Observable<boolean>) {
    this._isLoading$ = value;
  }

  public set modalSubscription(value: Subscription) {
    this._modalSubscription = value;
  }
}
