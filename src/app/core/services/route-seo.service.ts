import { Service, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { SeoService } from './seo.service';

@Service()
export class RouteSeoService {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  initialize(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        const snapshot = route.snapshot;
        const title = snapshot.title;
        const description = snapshot.data['description'] as
          | string
          | undefined;

        if (title && description) {
          this.seo.updatePage(title, description);
        }
      });
  }
}
