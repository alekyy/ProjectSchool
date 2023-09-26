import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, fromEvent, map } from 'rxjs';
import { MenuItem, menuItems } from './shared/models/menu';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isSmallScreen = false;
  popText = false;
  applyShadow = false;
  itemsMenu: MenuItem[] = menuItems;
  menuName = '';
  private breakpointObserver: BreakpointObserver;
  private route: Router;

  constructor() {
    this.breakpointObserver = inject(BreakpointObserver);
    this.route = inject(Router);
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe((value: number) => this.determineHeader(value));

    this.route.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        let moduleName = event.url.split('/')[1];
        this.menuName = this.itemsMenu.filter(
          (item) => item.link === `/${moduleName}`
        )[0]?.label;
      });
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => (this.isSmallScreen = res.matches));
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
