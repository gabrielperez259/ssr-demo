import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PlaceService } from '../../core/services/place.service';
import { PlaceCategory } from '../../core/models/place.model';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly placeService = inject(PlaceService);
  private readonly seo = inject(SeoService);
  readonly featuredPlaces = this.placeService.getFeatured(3);

  readonly categoryLabels: Record<PlaceCategory, string> = {
    PARK: 'Parque',
    RESTAURANT: 'Restaurante',
    CAFE: 'Cafeteria',
    MUSEUM: 'Museu',
    TOURIST_ATTRACTION: 'Ponto turístico',
  };

 

  constructor() {
    this.seo.updatePage(
      'Lugares para Visitar em Campinas | Catálogo de Lugares',
      'Descubra parques, restaurantes, cafeterias e pontos turísticos para conhecer em Campinas, SP.',
    );
  }
}
