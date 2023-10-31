import { Component, OnDestroy } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  title = 'cats';

  unsubscribe: Subject<void> = new Subject<void>();

  appLoading: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((routerEvent) => {
        this.checkRouterEvent(routerEvent as RouterEvent);
      });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.appLoading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.appLoading = false;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
