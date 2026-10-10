import { Component, inject, RESPONSE_INIT } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  Place,
  PlaceCategory,
  PriceLevel,
} from '../../../core/models/place.model';
import { PlaceService } from '../../../core/services/place.service';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './place-detail.html',
  styleUrl: './place-detail.scss',
})
export class PlaceDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly placeService = inject(PlaceService);
  private readonly seo = inject(SeoService);
  private readonly responseInit = inject(RESPONSE_INIT, {
    optional: true,
  });

  readonly place: Place | undefined;

  readonly categoryLabels: Record<PlaceCategory, string> = {
    PARK: 'Parque',
    RESTAURANT: 'Restaurante',
    CAFE: 'Cafeteria',
    MUSEUM: 'Museu',
    TOURIST_ATTRACTION: 'Ponto turístico',
  };

  readonly priceLabels: Record<PriceLevel, string> = {
    0: 'Gratuito',
    1: 'Econômico',
    2: 'Preço moderado',
    3: 'Mais caro',
  };

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.place = slug
      ? this.placeService.getBySlug(slug)
      : undefined;

    if (!this.place && this.responseInit) {
      this.responseInit.status = 404;
    }

    this.updateSeo();
  }

  private updateSeo(): void {
    if (!this.place) {
      this.seo.updatePage(
        'Lugar não encontrado | Catálogo de Lugares',
        'O lugar solicitado não foi encontrado no catálogo.',
      );
      return;
    }

    this.seo.updatePage(
      this.place.metaTitle,
      this.place.metaDescription,
      this.place.imageUrl,
      'article',
    );
  }
}

