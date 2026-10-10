import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  imports: [],
  selector: 'app-favorites',
  styleUrl: './favorites.scss',
  templateUrl: './favorites.html',
})
export class Favorites {
  private readonly seo = inject(SeoService);

constructor() {
  this.seo.updatePage(
    'Lugares para Favoritos em Campinas | Catálogo de Lugares',
    'Favorite seus lugares favoritos para conhecer em Campinas, SP.',
  );
}
}
