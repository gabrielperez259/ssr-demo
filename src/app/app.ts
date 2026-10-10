import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteSeoService } from './core/services/route-seo.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  private readonly routeSeo = inject(RouteSeoService);
  constructor() {
    this.routeSeo.initialize();
  }
}
