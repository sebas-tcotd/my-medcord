import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  public isSidebarOpen: boolean = false;
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
