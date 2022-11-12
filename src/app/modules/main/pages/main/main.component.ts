import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {
  public isMobile!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = this.isViewportMobile();
  }

  private isViewportMobile(): boolean {
    const width = window.innerWidth;
    console.log(width);

    if (width <= 1024) {
      return true;
    } else {
      return false;
    }
  }
}
